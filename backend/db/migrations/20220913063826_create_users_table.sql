-- migrate:up
CREATE TABLE users(
    id int not null auto_increment primary key,
    profile_id varchar(200) not null,
    profile_nickname varchar(200) null,
    profile_banner varchar(1000) null,
    profile_image varchar(1000) null,
    comment varchar(200) null,
    password varchar(100) not null,
    create_at timestamp not null default current_timestamp,
    constraint users_id_ukey unique (profile_id)
)

-- migrate:down

