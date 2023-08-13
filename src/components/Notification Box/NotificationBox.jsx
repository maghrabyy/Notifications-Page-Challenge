import PropTypes from 'prop-types';

const NotificationBox = props =>{
    return (
        <div onClick={props.clicked} className={"not-box cursor-pointer flex items-center gap-3 rounded-lg px-3 py-2 my-3 mx-4 " + (props.isUnread? "bg-blue-100 shadow-md" : null)}>
            <div className="not-userImg self-start">
                <img src={props.pImg} className="w-14" alt=""/>
            </div>
            <div className="not-details">
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
                <div className="pmContent text-gray-600 p-3 bg-blue-200 rounded-md mt-2">
                    {props.pmContent}
                </div>
                :
                null
                }
            </div>
            {
                props.notType === 'picComment' ?
                    <img src={props.commentedPic} className='inline-block w-12 ms-auto' alt="" />
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