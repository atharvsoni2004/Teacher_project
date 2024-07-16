export default function AddCourse()
{
    return (<>
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header"><h1>Add Courses</h1></div>
                <div className="card-body">
                <form>
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
                    <label htmlFor="courseTitle" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="courseTitle"
                        placeholder="Enter course title"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="courseFees" className="form-label">
                        Fees
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="courseFees"
                        placeholder="Enter course fees"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="courseDuration" className="form-label">
                        Duration
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="courseDuration"
                        placeholder="Enter course duration"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="courseDescription" className="form-label">
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        id="courseDescription"
                        rows={3}
                        placeholder="Enter course description"
                        defaultValue={""}
                    />
                </div>
               <div className="card-footer">
               <button type="submit" className="btn btn-primary">
                    Add Course
                </button>
               </div>
            </form>
                </div>
            </div>
        </div>

    </>)
}

