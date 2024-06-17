import "./index.css";
import { Link, useLocation, useParams } from "react-router-dom";

const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

export default function CoursesNavigation() {
    const { cid } = useParams(); // Get the course ID from the URL
    const location = useLocation(); // Get the current URL path
    console.log(cid);
    console.log(location);

    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            {links.map((link) => {
                // Generate the path for each link
                const path = `/Kanbas/Courses/${cid}/${link}`;
                // Determine if the link is active based on the current URL path
                const isActive = location.pathname === path;

                return (
                    <Link
                        key={link}
                        id={`wd-course-${link.toLowerCase()}-link`}
                        to={path}
                        className={`list-group-item border border-0 ${isActive ? 'active' : 'text-danger'}`}>
                        {link}
                    </Link>
                );
            })}
        </div>
    );
}
