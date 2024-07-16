export default function AddBatches() {
    return (<>
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header">
                    <h1>Add Batches</h1>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="batchId" className="form-label">
                                Batch ID
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="batchId"
                                placeholder="Enter batch ID"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="courseId" className="form-label">
                                Course ID
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="courseId"
                                placeholder="Enter course ID"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="startDate" className="form-label">
                                Start Date
                            </label>
                            <input type="date" className="form-control" id="startDate" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="endDate" className="form-label">
                                End Date
                            </label>
                            <input type="date" className="form-control" id="endDate" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="classTime" className="form-label">
                                Class Time
                            </label>
                            <input type="time" className="form-control" id="classTime" />
                        </div>

                    </form>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                        Add Batch
                    </button>
                </div>
            </div>
        </div>
    </>)
}