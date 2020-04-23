import React, { Component } from "react";





export default class BuildErrorMessages extends Component {

    closeMessageBox = (e) => {
        console.log("Message box closed");
    }

    mapClassType = (type) => {
        switch (type) {
            case "error":
                return {
                    messageClass: "error",
                    messageIcon: "icon-error"
                };
            case "info":
                return {
                    messageClass: "info",
                    messageIcon: "icon-info"
                };

            case "warning":
                return {
                    messageClass: "warning",
                    messageIcon: "icon-warning"
                };

            case "danger":
                return {
                    messageClass: "danger",
                    messageIcon: "icon-danger"
                };

            default:
                return {
                    messageClass: "success",
                    messageIcon: "icon-success"
                };
        }
    }


    render() {
        if (this.props.messages) {
            return (
                <ul className="message-box" >
                    {this.props.messages.length > 0
                        ?
                        this.props.messages.map(((messageObj, index) => {
                            const key = `${messageObj.message.split(" ").join("_")}_0${index}00`;
                            
                            const styleMessages = this.mapClassType(messageObj.type);

                            const messageClass = styleMessages.messageClass;

                            const messageIcon = `fa ${styleMessages.messageIcon}`;

                            return <li
                                key={key}
                                className={messageClass}
                            >
                                <p className="message-content">
                                    <i className={messageIcon} ></i>
                                    {messageObj.message}
                                    <span className="close-box" onClick={this.closeMessageBox}>x</span>
                                </p>
                            </li>

                        })) : ""
                    }
                </ul>
            );
        }
    }
}