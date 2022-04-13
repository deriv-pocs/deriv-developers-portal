import DeleteAppDialog from "./DeleteAppDialog";

export default function ManageApps() {
    <div className="manage-apps">
        <div className="manage-apps-table">
            <table>
                <thead>
                <tr>
                    <th>Users</th>
                    <th>Application ID</th>
                    <th>Scopes</th>
                    <th>Redirect URL</th>
                    <th>
                    {/* update app action column */}
                    </th>
                    <th>
                    {/* remove app action column */}
                    </th>
                </tr>
                </thead>
                <tbody id="app_list">
                {/* populate table with data from API */}
                </tbody>
            </table>
            <div className="no-apps-wrapper">
                <div className="no-apps">
                <div className="no-apps-icon">
                    <img src="/img/table-empty.svg" alt="No apps registered" />
                </div>
                <div className="no-apps-text">
                    <p>To see your details reflected, please register your app via the registration form.</p>
                </div>
                {/* add go back button like in dialogs "got it" */}
                <button className="gray-btn-submit" id="empty_go_back">Register now</button>
                </div>
            </div>
        </div>
        <DeleteAppDialog />
        {/* <dialog id="register_app_dialog" className="dialog-wrapper">
        <div className="dialog dialog-modal">
            <div className="dialog-header">
            <img id="close_register_app_dialog" src="/img/close_dialog.svg" alt="Close" />
            </div>
            <div className="dialog-body dialog-body-modal">
            <img className="dialog-warning" src="/img/success.svg" alt="Success!" />
            <h3>Success!</h3>
            <div className="dialog-question">You have successfully registered your application. You can now start
                using Deriv API.</div>
            </div>
            <div className="dialog-footer">
            <button className="dialog-btn-cancel" id="modal_got_it">Got it</button>
            <button className="dialog-btn-submit" id="modal_app_register">Manage application</button>
            </div>
        </div>
        </dialog> */}
    </div>
}