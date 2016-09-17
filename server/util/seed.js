var User = require('../api/user/userModel');
var Diary = require('../api/diary/diaryModel');
var Category = require('../api/category/categoryModel');
var Post = require('../api/post/postModel');

var _ = require('lodash');
var logger = require('./logger');

logger.log('Seeding the Database');

var users = [
    {username: 'Jimmylo', password: 'test'},
    {username: 'Xoko', password: 'test'},
    {username: 'katamon', password: 'test'}
];

var categories = [
    {name: 'back pain', intensity: '5'},
    {name: 'lower back pain', intensity: '10'},
    {name: 'leg pain', intensity: '3'}
];
//
var diaries = [
    {title: 'slow day', text: 'this is a very slow day for me', painLevel: 5, mood: 'medium low'},
    {title: 'lower back pain again', text: 'i ve been fighting with my lower back pain all day', painLevel: 4, mood: 'low'},
    {title: 'brain fog again ', text: 'today have problems to concentrate', painLevel: 3, mood: 'very low'}
];

var posts = [
  {title: 'Learn angular 2 today', value: 'Angular to is so dope'},
  {title: '10 reasons you should love IE7', value: 'IE7 is so amazing'},
  {title: 'Why we switched to Go', value: 'go is dope'}
];

var createDoc = function(model, doc) {
    return new Promise(function(resolve, reject) {
        new model(doc).save(function(err, saved) {
            return err ? reject(err) : resolve(saved);
        });
    });
};

var cleanDB = function() {
    logger.log('... cleaning the DB');
    var cleanPromises = [User , Category, Diary,Post]
        .map(function(model) {
            return model.remove().exec();
        });
    return Promise.all(cleanPromises);
}

var createUsers = function(data) {

    var promises = users.map(function(user) {
        return createDoc(User, user);
    });

    return Promise.all(promises)
        .then(function(users) {
            return _.merge({users: users}, data || {});
        });
};

var createCategories = function(data) {
    var promises = categories.map(function(category) {
        return createDoc(Category, category);
    });

    return Promise.all(promises)
        .then(function(categories) {
            return _.merge({categories: categories}, data || {});
        });
};

var createDiaries = function(data) {
    var addCategory = function(diary, category) {
        diary.categories.push(category);

        return new Promise(function(resolve, reject) {
            diary.save(function(err, saved) {
                return err ? reject(err) : resolve(saved)
            });
        });
    };

    var newDiaries = diaries.map(function(diary, i) {
        diary.author = data.users[i]._id;
        return createDoc(Diary, diary);
    });

    return Promise.all(newDiaries)
        .then(function(savedDiaries) {
            return Promise.all(savedDiaries.map(function(diary, i){
                return addCategory(diary, data.categories[i])
            }));
        })
        // .then(function() {
        //     return 'Seeded DB with 3 Diaries, 3 Users, 3 Categories';
        // });


};

var createPosts = function(data) {
  var addCategory = function(post, category) {
    post.categories.push(category);

    return new Promise(function(resolve, reject) {
      post.save(function(err, saved) {
        return err ? reject(err) : resolve(saved)
      });
    });
  };

  var newPosts = posts.map(function(post, i) {
    post.author = data.users[i]._id;
    return createDoc(Post, post);
  });

  return Promise.all(newPosts)
    .then(function(savedPosts) {
      return Promise.all(savedPosts.map(function(post, i){
        return addCategory(post, data.categories[i])
      }));
    })
    .then(function() {
      return 'Seeded DB with 3 Posts, 3 Users, 3 Categories';
    });
};

cleanDB()
    .then(createUsers)
    .then(createCategories)
    .then(createDiaries)
    .then(createPosts)
    .then(logger.log.bind(logger))
    .catch(logger.log.bind(logger));
