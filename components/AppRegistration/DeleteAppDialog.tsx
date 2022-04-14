export default function DeleteAppDialog() {
    return (
        <dialog id="delete_app_dialog" className="dialog-wrapper">
            <div className="dialog dialog-delete">
                <div className="dialog-header">
                    <img id="close_delete_dialog" src="/img/close_dialog.svg" alt="Close" />
                </div>
                <div className="dialog-body dialog-body-delete">
                    <img className="dialog-warning" src="/img/warning.png" alt="Warning!" />
                    <h3>Delete app</h3>
                    <div className="dialog-question">
                        Are you sure you want to delete this app?
                    </div>
                </div>
                <div className="dialog-footer">
                    <button className="dialog-btn-cancel" id="delete_app_keep">No, keep it</button>
                    <button className="dialog-btn-submit" id="delete_app_button">Yes, delete</button>
                </div>
            </div>
        </dialog>
    )
}