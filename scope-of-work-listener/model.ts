
export default {
    closeScopeOfWorkIssue: async (githubId: number) => {
        const dbEntry = await prisma.scopeOfWorkDeliverable.findFirst({
            where: {
                githubId: githubId
            }
        })

        if (!dbEntry) {
            throw new Error("Deliverable not found");
        }

        const { driveId, documentId, id } = dbEntry;

        const sowDocument = await driveServer.getDocument(driveId, documentId) as ScopeOfWorkDocument;
        if (!sowDocument) {
            throw new Error("Document not found");
        }

        const result = await driveServer.addAction(driveId, documentId, sow.actions.updateDeliverableStatus({
            id,
            status: "DELIVERED"
        }))


        return result;
    }
}