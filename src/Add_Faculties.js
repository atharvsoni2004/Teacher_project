export default function AddFaculties() {
    return (<>
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header">
                    <h1>Add Faculties</h1>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="teacherId" className="form-label">
                                Teacher ID
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="teacherId"
                                placeholder="Enter teacher ID"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="teacherName" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="teacherName"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="teacherMobile" className="form-label">
                                Mobile
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="teacherMobile"
                                placeholder="Enter mobile number"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="teacherEmail" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="teacherEmail"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="teacherGender" className="form-label">
                                Gender
                            </label>
                            <select className="form-control" id="teacherGender">
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="teacherQualification" className="form-label">
                                Qualification
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="teacherQualification"
                                placeholder="Enter qualification"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="teacherExperience" className="form-label">
                                Experience
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="teacherExperience"
                                placeholder="Enter years of experience"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="teacherPhoto" className="form-label">
                                Photo
                            </label>
                            <input type="file" className="form-control" id="teacherPhoto" />
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