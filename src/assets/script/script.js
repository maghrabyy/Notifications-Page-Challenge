import markWebberAv from '../../assets/images/avatar-mark-webber.webp';
import angelaGrayAv from '../../assets/images/avatar-angela-gray.webp';
import annaKimAv from '../../assets/images/avatar-anna-kim.webp';
import jacobThompsonAv from '../../assets/images/avatar-jacob-thompson.webp';
import kimberlySmithAv from '../../assets/images/avatar-kimberly-smith.webp';
import nathanPetersonAv from '../../assets/images/avatar-nathan-peterson.webp';
import rizkyHasanuddinAv from '../../assets/images/avatar-rizky-hasanuddin.webp';
import myChessPic from '../../assets/images/image-chess.webp';

const notificationData = {
    postReact:{
        type: 'postReact',
        notificationMsg:'reacted to your recent post',
    },
    followedYou:{
        type: 'followedYou',
        notificationMsg:'Followed you',
    },
    joinedGroup: {
        type: 'joinedGroup',
        notificationMsg:'has joined your group',
    },
    leftGroup:{
        type: 'leftGroup',
        notificationMsg:'has left your group',
    },
    sentPM:{
        type: 'sentPM',
        notificationMsg:'sent you a private message',
    },
    picComment:{
        type: 'picComment',
        notificationMsg:'commented on your picture',
    },
}

const notificationsList = [
    {
        id:'markWebber4594',
        notificationType:notificationData.postReact.type,
        pAvatar: markWebberAv,
        pName:'Mark Webber',
        notMsg:notificationData.postReact.notificationMsg,
        notContent:'My first tournament today!',
        notDuration: '1m',
        isNotUnread:true,
        commentedPic: null,
        pmContent: null,
    },
    {
        id:'angelaGray5395',
        notificationType:notificationData.followedYou.type,
        pAvatar: angelaGrayAv,
        pName:'Angela Gray',
        notMsg:notificationData.followedYou.notificationMsg,
        notContent:null,
        notDuration: '5m',
        isNotUnread:true,
        commentedPic: null,
        pmContent: null,
    },
    {
        id:'jacobThompson5453',
        notificationType:notificationData.joinedGroup.type,
        pAvatar: jacobThompsonAv,
        pName:'Jacob Thompson',
        notMsg:notificationData.joinedGroup.notificationMsg,
        notContent:'Chess Club',
        notDuration: '1 day',
        isNotUnread:true,
        commentedPic: null,
        pmContent: null,
    },
    {
        id:'rizkyHasanuddin748',
        notificationType:notificationData.sentPM.type,
        pAvatar: rizkyHasanuddinAv,
        pName:'rizky Hasanuddin',
        notMsg:notificationData.sentPM.notificationMsg,
        notContent:null,
        notDuration: '5 days',
        isNotUnread:false,
        commentedPic: null,
        pmContent: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
        id:'kimberlySmith1967',
        notificationType:notificationData.picComment.type,
        pAvatar: kimberlySmithAv,
        pName:'kimberly Smith',
        notMsg:notificationData.picComment.notificationMsg,
        notContent:null,
        notDuration: '1 week',
        isNotUnread:false,
        commentedPic: myChessPic,
        pmContent: null,
    },
    {
        id:'nathanPeterson9674',
        notificationType:notificationData.postReact.type,
        pAvatar: nathanPetersonAv,
        pName:'nathan Peterson',
        notMsg:notificationData.postReact.notificationMsg,
        notContent:'5 end-game strategies to increase your win rate',
        notDuration: '2 weeks',
        isNotUnread:false,
        commentedPic: null,
        pmContent: null,
    },
    {
        id:'annaKim7489',
        notificationType:notificationData.leftGroup.type,
        pAvatar: annaKimAv,
        pName:'anna Kim',
        notMsg:notificationData.leftGroup.notificationMsg,
        notContent:'Chess Club',
        notDuration: '2 weeks',
        isNotUnread:false,
        commentedPic: null,
        pmContent: null,
    },
]

export default notificationsList;