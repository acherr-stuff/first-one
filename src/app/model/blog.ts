export interface Post {
  type: string;
  category: string;
  image: string;
  date: string;
  timeToListen?: string;
  title: string;
  text: string;
}

export enum Icons {
  Files = 'files',
  Mic = 'mic',
  Search = 'search',
  Calendar = 'calendar',
  ArrNext = 'arr-next',
  ArrPrev = 'arr-prev',
  Clock = 'clock',
  Person = 'person',
  Iphone = 'iphone',
  Message = 'message',
  Heart = 'heart',
  Chat = 'chat',
  Pin = 'pin',
  Play = 'play',
  SelectDownArr = 'select-down-arr',
}

export enum SocialIcons {
  Facebook = 'facebook',
  Twitter = 'twitter',
  LinkedIn = 'linkedin',
  Google = 'google',
  YouTube = 'youtube',
  Instagram = 'instagram',
  Telegram = 'telegram',
}
