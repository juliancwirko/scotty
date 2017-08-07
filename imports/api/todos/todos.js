import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Todos = new Mongo.Collection('Todos'); // eslint-disable-line

Todos.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Todos.schema = new SimpleSchema({
  message: { type: String },
  finished: { type: Boolean, defaultValue: false },
});

Todos.attachSchema(Todos.schema);
