import React from "react";
import Form from "../Form";

function Modal({ id, login, signUp, addItem }) {
    return (
        <>
            {signUp ?
                <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title" id="exampleModalLongTitle">CREATE ACCOUNT</h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Form
                                    login={login}
                                    signUp={signUp}
                                    addItem={addItem}
                                />
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                :
                <>
                    {!addItem ?
                        <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id="exampleModalLongTitle">LOGIN</h3>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <Form
                                            login={login}
                                            signUp={signUp}
                                            addItem={addItem}
                                        />
                                    </div>
                                    {/* <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                            </div> */}
                                </div>
                            </div>
                        </div>
                        :
                        <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id="exampleModalLongTitle">ADD AN ITEM</h3>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <Form
                                            login={login}
                                            signUp={signUp}
                                            addItem={addItem}
                                        />
                                    </div>
                                    {/* <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                            </div> */}
                                </div>
                            </div>
                        </div>
                    }
                </>
            }
        </>
    );
};

export default Modal;

// {addNew ?
//     <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered" role="document">
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <h3 className="modal-title" id="exampleModalLongTitle">LOGIN</h3>
//                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 <div className="modal-body">
//                     {/* <Form
//                         login={login}
//                         signUp={signUp}
//                     /> */}
//                 </div>
//                 <div className="modal-footer">
//                     <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
//                 </div>
//             </div>
//         </div>
//     </div> 
//     :
//     null}