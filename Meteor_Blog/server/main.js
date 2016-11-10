import { Meteor } from 'meteor/meteor';
import publications from './publications';

import './publications/blogs.js';
import './publications/profiles.js';


Meteor.startup(() => {
  publications();
});
