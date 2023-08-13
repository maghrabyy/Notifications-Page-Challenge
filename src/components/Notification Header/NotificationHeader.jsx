const NotificationHeader = props =>{
    return (
        <div className="not-header flex justify-between py-5 px-5">
          <div className="not-num font-bold text-xl text-fm-darkBlue">
            Notifications <span id="unreadNotNum" className="bg-primary-blue text-white text-sm rounded-md px-2 py-1 ms-2">{props.unreadCount}</span>
          </div>
          <div onClick={props.clicked} className="markAsReadBtn text-gray-500 cursor-pointer hover:text-blue-900">
            Mark all as read
          </div>
      </div>
    );
}

export default NotificationHeader;