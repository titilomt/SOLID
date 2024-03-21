interface LoadLastEventRepository {
  loadLastEvent: (groupId: string) => Promise<void>;
}

class CheckLastEventStatus {
  constructor(private readonly loadLastEventRepo: LoadLastEventRepository) {}

  async exec(groupId: string): Promise<void> {
    await this.loadLastEventRepo.loadLastEvent(groupId);
  }
}

class LoadLastEventRepositoryMock implements LoadLastEventRepository {
  groupId?: string;

  async loadLastEvent(groupId: string): Promise<void> {
    this.groupId = groupId;
  }
}

describe("CheckLastEventStatus", () => {
  it("should get last event data", async () => {
    // Padrão SUT: É SYSTEM UNDER TEST
    const loadLastEventRepoMock = new LoadLastEventRepositoryMock();
    const sut = new CheckLastEventStatus(loadLastEventRepoMock);

    await sut.exec("any_group_id");

    expect(loadLastEventRepoMock.groupId).toBe("any_group_id");
  });
});
