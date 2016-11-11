import { Meteor } from 'meteor/meteor';
import publications from './publications';

import './publications/blogs.js';
import './publications/profiles.js';
import './publications/chats.js';


Meteor.startup(() => {
  publications();
});
