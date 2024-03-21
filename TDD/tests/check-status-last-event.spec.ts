import { set, reset } from "mockdate"; // mockdate é uma lib para mockar a data atual

type OutputEvent = {
  endDate: Date;
  reviewDurationInHours: number; // Nomeclatura de variável em camelCase para melhor leitura e que faça sentido Clean Code Naming Conventions
};
interface LoadLastEventRepository {
  loadLastEvent: ({
    groupId,
  }: {
    groupId: string;
  }) => Promise<OutputEvent | undefined>;
}

// Evitar usar tipo primitivo como retorno de função, pois pode ser que no futuro seja necessário retornar mais informações
// Quando o tipo é complexo de mais, tem regras de negócios que serão reutilizadas em outros lugares
// é interessante criar uma classe de entidade para ele
class EventStatus {
  status?: "active" | "inReview" | "done";

  constructor(eventDto?: OutputEvent) {
    if (eventDto === undefined) {
      this.status = "done";
      return;
    }
    const now = new Date();
    if (eventDto.endDate >= now) {
      this.status = "active";
      return;
    }
    const reviewDurationInMs = eventDto.reviewDurationInHours * 60 * 60 * 1000;
    const reviewEndDate = new Date(
      eventDto.endDate.getTime() + reviewDurationInMs
    );
    this.status = reviewEndDate >= now ? "inReview" : "done";
  }
}

class CheckLastEventStatus {
  constructor(private readonly loadLastEventRepo: LoadLastEventRepository) {}

  async exec({ groupId }: { groupId: string }): Promise<EventStatus> {
    const event = await this.loadLastEventRepo.loadLastEvent({ groupId });
    if (event === undefined) return { status: "done" };
    const now = new Date();
    if (event.endDate >= now) return { status: "active" };
    const reviewDurationInMs = event.reviewDurationInHours * 60 * 60 * 1000;
    const reviewEndDate = new Date(
      event.endDate.getTime() + reviewDurationInMs
    );
    return reviewEndDate >= now ? { status: "inReview" } : { status: "done" };
  }
}

class LoadLastEventRepositorySpy implements LoadLastEventRepository {
  groupId?: string;
  callsCount = 0;
  output: OutputEvent | undefined;

  async loadLastEvent({
    groupId,
  }: {
    groupId: string;
  }): Promise<OutputEvent | undefined> {
    this.groupId = groupId;
    this.callsCount++;
    return this.output;
  }
}

type SutOutput = {
  sut: CheckLastEventStatus;
  loadLastEventRepository: LoadLastEventRepositorySpy;
};
const sutCheckLastEventStatusFactory = (): SutOutput => {
  const loadLastEventRepository = new LoadLastEventRepositorySpy();
  const sut = new CheckLastEventStatus(loadLastEventRepository);
  return { sut, loadLastEventRepository };
};

describe("CheckLastEventStatus", () => {
  const groupId = "any_group_id"; // groupId é um valor qualquer para ser usado nos testes
  beforeEach(() => {
    set(new Date()); // mockando a data atual para ser sempre a mesma
  });
  afterAll(() => {
    reset(); // resetando a data atual
  });
  it("should get last event data", async () => {
    const { sut, loadLastEventRepository } = sutCheckLastEventStatusFactory();

    await sut.exec({ groupId });

    expect(loadLastEventRepository.groupId).toBe("any_group_id");
    expect(loadLastEventRepository.callsCount).toBe(1);
  });
  it("should return status done when group has no event", async () => {
    const { sut, loadLastEventRepository } = sutCheckLastEventStatusFactory();
    loadLastEventRepository.output = undefined;

    const eventStatus = await sut.exec({ groupId });

    expect(eventStatus.status).toBe("done");
  });
  it("should return status active when current date is before event end date", async () => {
    const { sut, loadLastEventRepository } = sutCheckLastEventStatusFactory();
    loadLastEventRepository.output = {
      endDate: new Date(new Date().getTime() + 1),
      reviewDurationInHours: 1,
    };

    const eventStatus = await sut.exec({ groupId });

    expect(eventStatus.status).toBe("active");
  });
  it("should return status active when current date is equal event end date", async () => {
    const { sut, loadLastEventRepository } = sutCheckLastEventStatusFactory();
    loadLastEventRepository.output = {
      endDate: new Date(),
      reviewDurationInHours: 1,
    };

    const eventStatus = await sut.exec({ groupId });

    expect(eventStatus.status).toBe("active");
  });
  it("should return status isReview when current date is after event end date", async () => {
    const { sut, loadLastEventRepository } = sutCheckLastEventStatusFactory();
    loadLastEventRepository.output = {
      endDate: new Date(new Date().getTime() - 1),
      reviewDurationInHours: 1,
    };

    const eventStatus = await sut.exec({ groupId });

    expect(eventStatus.status).toBe("inReview");
  });
  it("should return status isReview when current date is before review time", async () => {
    const reviewDurationInHours = 1;
    const reviewDurationInMs = reviewDurationInHours * 60 * 60 * 1000;
    const { sut, loadLastEventRepository } = sutCheckLastEventStatusFactory();
    loadLastEventRepository.output = {
      endDate: new Date(new Date().getTime() - reviewDurationInMs + 1), // +1 para garantir que a data seja antes do tempo de revisão para ficar no limite
      reviewDurationInHours,
    };

    const eventStatus = await sut.exec({ groupId });

    expect(eventStatus.status).toBe("inReview");
  });
  it("should return status isReview when current date is equals to review time", async () => {
    const reviewDurationInHours = 1;
    const reviewDurationInMs = reviewDurationInHours * 60 * 60 * 1000;
    const { sut, loadLastEventRepository } = sutCheckLastEventStatusFactory();
    loadLastEventRepository.output = {
      endDate: new Date(new Date().getTime() - reviewDurationInMs), // revisão no tempo limite
      reviewDurationInHours,
    };

    const eventStatus = await sut.exec({ groupId });

    expect(eventStatus.status).toBe("inReview");
  });
  it("should return status done when current date is after review time", async () => {
    const reviewDurationInHours = 1;
    const reviewDurationInMs = reviewDurationInHours * 60 * 60 * 1000;
    const { sut, loadLastEventRepository } = sutCheckLastEventStatusFactory();
    loadLastEventRepository.output = {
      endDate: new Date(new Date().getTime() - reviewDurationInMs - 1), // revisão no tempo limite
      reviewDurationInHours,
    };

    const eventStatus = await sut.exec({ groupId });

    expect(eventStatus.status).toBe("done");
  });
});
