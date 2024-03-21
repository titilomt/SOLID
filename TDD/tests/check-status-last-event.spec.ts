import { set, reset } from "mockdate"; // mockdate é uma lib para mockar a data atual

type OutputEvent = {
  endDate: Date;
};
interface LoadLastEventRepository {
  loadLastEvent: ({
    groupId,
  }: {
    groupId: string;
  }) => Promise<OutputEvent | undefined>;
}

// Evitar usar tipo primitivo como retorno de função, pois pode ser que no futuro seja necessário retornar mais informações
type EventStatus = {
  status: string;
};

class CheckLastEventStatus {
  constructor(private readonly loadLastEventRepo: LoadLastEventRepository) {}

  async exec({ groupId }: { groupId: string }): Promise<EventStatus> {
    const event = await this.loadLastEventRepo.loadLastEvent({ groupId });
    if (event === undefined) return { status: "done" };
    const now = new Date();
    return event.endDate >= now ? { status: "active" } : { status: "inReview" };
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
    };

    const eventStatus = await sut.exec({ groupId });

    expect(eventStatus.status).toBe("active");
  });
  it("should return status active when current date is equal event end date", async () => {
    const { sut, loadLastEventRepository } = sutCheckLastEventStatusFactory();
    loadLastEventRepository.output = {
      endDate: new Date(),
    };

    const eventStatus = await sut.exec({ groupId });

    expect(eventStatus.status).toBe("active");
  });
  it("should return status isReview when current date is after event end date", async () => {
    const { sut, loadLastEventRepository } = sutCheckLastEventStatusFactory();
    loadLastEventRepository.output = {
      endDate: new Date(new Date().getTime() - 1),
    };

    const eventStatus = await sut.exec({ groupId });

    expect(eventStatus.status).toBe("inReview");
  });
});
