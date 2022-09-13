-- migrate:up
create table tweets(
    id int not null auto_increment primary key,
    user_id int not null,
    replyTF boolean not null,
    content varchar(1000) not null,
    content_img varchar(1000) null,
    reply_at int null,
    create_at timestamp not null default current_timestamp,
    tweet_for varchar(200) not null,
    CONSTRAINT tweets_userid_fkey foreign key (user_id) references users (id),
    constraint tweets_repley_fkey foreign key (reply_at) references tweets (id)
)

-- migrate:down

