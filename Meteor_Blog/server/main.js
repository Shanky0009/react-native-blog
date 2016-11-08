import { Meteor } from 'meteor/meteor';
import publications from './publications';

import './publications/blogs.js';


Meteor.startup(() => {
  publications();
});
