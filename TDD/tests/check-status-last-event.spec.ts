interface LoadLastEventRepository {
  loadLastEvent: (groupId: string) => Promise<undefined>;
}

class CheckLastEventStatus {
  constructor(private readonly loadLastEventRepo: LoadLastEventRepository) {}

  async exec(groupId: string): Promise<string> {
    const event = await this.loadLastEventRepo.loadLastEvent(groupId);
    return event ? "active" : "done";
  }
}

class LoadLastEventRepositorySpy implements LoadLastEventRepository {
  groupId?: string;
  callsCount = 0;
  output: undefined;

  async loadLastEvent(groupId: string): Promise<undefined> {
    this.groupId = groupId;
    this.callsCount++;
    return this.output;
  }
}

const sutCheckLastEventStatusFactory = (): {
  sut: CheckLastEventStatus;
  loadLastEventRepo: LoadLastEventRepositorySpy;
} => {
  const loadLastEventRepo = new LoadLastEventRepositorySpy();
  const sut = new CheckLastEventStatus(loadLastEventRepo);
  return { sut, loadLastEventRepo };
};

describe("CheckLastEventStatus", () => {
  it("should get last event data", async () => {
    const { sut, loadLastEventRepo } = sutCheckLastEventStatusFactory();

    await sut.exec("any_group_id");

    expect(loadLastEventRepo.groupId).toBe("any_group_id");
    expect(loadLastEventRepo.callsCount).toBe(1);
  });
  it("should return status done when group has no event", async () => {
    const { sut, loadLastEventRepo } = sutCheckLastEventStatusFactory();

    const status = await sut.exec("any_group_id");

    expect(status).toBe("done");
    expect(loadLastEventRepo.callsCount).toBe(1);
  });
});
