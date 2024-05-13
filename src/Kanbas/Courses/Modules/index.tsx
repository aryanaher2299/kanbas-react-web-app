export default function Modules() {
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <button id="wd-collapse-all" type="button">
                            Collapse All
                        </button>
                    </td>
                    <td><button id="wd-view-progress" type="button">
                        View Progress
                    </button>
                    </td>
                    <td>
                        <select id="wd-publish-all">
                            <option selected value="PUBALL">
                                Publish All</option>
                        </select>
                    </td>
                    <td>
                        <button id="wd-collapse-all" type="button">
                            + Module
                        </button>
                    </td>
                </tr>
            </table>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
