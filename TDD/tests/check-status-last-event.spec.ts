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

class CheckLastEventStatus {
  constructor(private readonly loadLastEventRepo: LoadLastEventRepository) {}

  async exec({ groupId }: { groupId: string }): Promise<string> {
    const event = await this.loadLastEventRepo.loadLastEvent({ groupId });
    return event ? "active" : "done";
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

    const status = await sut.exec({ groupId });

    expect(status).toBe("done");
    expect(loadLastEventRepository.callsCount).toBe(1);
  });
  it("should return status active when current date is before event end date", async () => {
    const { sut, loadLastEventRepository } = sutCheckLastEventStatusFactory();
    loadLastEventRepository.output = {
      endDate: new Date(new Date().getTime() + 1),
    };

    const status = await sut.exec({ groupId });

    expect(status).toBe("active");
    expect(loadLastEventRepository.callsCount).toBe(1);
  });
});
