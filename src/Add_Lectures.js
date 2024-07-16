export default function AddLectures() {
    return (<>
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header">
                    <h1>Add Lectures</h1>
                </div>
                <div className="card-body">

                    <form>
                        <div className="mb-3">
                            <label htmlFor="subjectId" className="form-label">
                                Subject ID
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="subjectId"
                                placeholder="Enter subject ID"
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
                            <label htmlFor="subjectTitle" className="form-label">
                                Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="subjectTitle"
                                placeholder="Enter subject title"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subjectRate" className="form-label">
                                Rate
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="subjectRate"
                                placeholder="Enter subject rate"
                            />
                        </div>
                    </form>

                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                        Add Subject
                    </button>
                </div>
            </div>
        </div>
    </>)
}