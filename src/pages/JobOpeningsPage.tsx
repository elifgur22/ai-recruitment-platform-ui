import { useMemo, useState } from "react";
import "./JobOpeningsPage.css";

type JobStatus = "Active" | "Draft" | "Closed";

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  applicants: number;
  status: JobStatus;
  matchRate: number;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Java Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    applicants: 48,
    status: "Active",
    matchRate: 86,
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Ankara",
    type: "Full-time",
    applicants: 32,
    status: "Active",
    matchRate: 79,
  },
  {
    id: 3,
    title: "Product Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    applicants: 21,
    status: "Draft",
    matchRate: 72,
  },
  {
    id: 4,
    title: "Data Scientist",
    department: "AI & Data",
    location: "Remote",
    type: "Full-time",
    applicants: 64,
    status: "Closed",
    matchRate: 91,
  },
];

function JobOpeningsPage() {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchText.toLowerCase()) ||
        job.department.toLowerCase().includes(searchText.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || job.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchText, statusFilter]);

  return (
    <main className="jobs-page">
      <div className="jobs-header">
        <div>
          <p className="jobs-eyebrow">Recruitment</p>
          <h1>Job Openings</h1>
          <p>Manage open positions and review candidate activity.</p>
        </div>

        <button className="create-job-button">+ Create Job</button>
      </div>

      <section className="jobs-toolbar">
        <input
          type="text"
          placeholder="Search by title or department..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
        >
          <option value="All">All statuses</option>
          <option value="Active">Active</option>
          <option value="Draft">Draft</option>
          <option value="Closed">Closed</option>
        </select>
      </section>

      <section className="jobs-grid">
        {filteredJobs.map((job) => (
          <article className="job-card" key={job.id}>
            <div className="job-card-top">
              <div>
                <h2>{job.title}</h2>
                <p>{job.department}</p>
              </div>

              <span className={`job-status ${job.status.toLowerCase()}`}>
                {job.status}
              </span>
            </div>

            <div className="job-meta">
              <span>{job.location}</span>
              <span>{job.type}</span>
              <span>{job.applicants} applicants</span>
            </div>

            <div className="match-section">
              <div className="match-label">
                <span>Average AI match</span>
                <strong>{job.matchRate}%</strong>
              </div>

              <div className="match-bar">
                <div style={{ width: `${job.matchRate}%` }} />
              </div>
            </div>

            <div className="job-card-actions">
              <button>View details</button>
              <button className="secondary-button">Edit</button>
            </div>
          </article>
        ))}
      </section>

      {filteredJobs.length === 0 && (
        <div className="empty-jobs">
          <h2>No jobs found</h2>
          <p>Try changing your search or status filter.</p>
        </div>
      )}
    </main>
  );
}

export default JobOpeningsPage;