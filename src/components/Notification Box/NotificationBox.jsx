import PropTypes from 'prop-types';

const NotificationBox = props =>{
    return (
        <div onClick={props.clicked} className={"not-box cursor-pointer grid grid-cols-12 gap-3 items-center rounded-lg px-3 py-2 my-3 mx-4 " + (props.isUnread? "bg-fm-lightGrayishBlue1 shadow-md" : null)}>
            <div className="not-userImg self-start md:col-span-1 col-span-2">
                <img src={props.pImg} className="w-14" alt=""/>
            </div>
            <div className={"not-details " + (props.notType === 'picComment' ? "col-span-8" : "md:col-span-11 col-span-10")}>
                <div className="not-msg">
                    <span className="userName font-bold hover:text-blue-900">
                        {props.pName} 
                    </span> 
                    <span className="userActivity text-gray-700 ms-1">
                    {props.notMsg} <span className="post-content font-bold hover:text-blue-900">{props.notContent}</span>
                    </span>
                    {props.isUnread? <div className="unread-dot w-2 h-2 rounded-full bg-red-400 ms-1 inline-block "></div>: null}
                </div>
                <div className="not-date text-gray-400">
                    {props.notDuration} ago
                </div>
                {
                props.notType === 'sentPM'?
                <div className="pmContent text-gray-600 p-3 border-fm-veryLightGrayishBlue border-2 hover:bg-fm-lightGrayishBlue2 hover:border-fm-lightGrayishBlue2 rounded-md mt-2">
                    {props.pmContent}
                </div>
                :
                null
                }
            </div>
            {
                props.notType === 'picComment' ?
                    <img src={props.commentedPic} className='inline-block w-12 ms-auto col-span-2' alt="" />
                    : null
            }
     </div>
    );
}

NotificationBox.propTypes ={
    clicked: PropTypes.func,
    notType: PropTypes.string.isRequired,
    pImg: PropTypes.string.isRequired,
    pName: PropTypes.string.isRequired,
    notMsg: PropTypes.string.isRequired,
    notContent: PropTypes.string,
    isUnread: PropTypes.bool.isRequired,
    notDuration: PropTypes.string.isRequired,
    commentedPic: PropTypes.string,
    pmContent: PropTypes.string,
}

export default NotificationBox;