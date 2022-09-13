-- migrate:up
create table retweet(
    id int not null auto_increment primary key,
    user_id int not null,
    tweet_id int not null,
    constraint retweet_user_fkey foreign key (user_id) references users (id),
    constraint retweet_tweet_fkey foreign key (tweet_id) references tweets (id),
    constraint retweet_user_ukey unique (user_id, tweet_id)
)

-- migrate:down

