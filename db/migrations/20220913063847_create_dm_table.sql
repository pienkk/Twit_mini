-- migrate:up
create table dm(
    id int not null auto_increment primary key,
    message varchar(1000) not null,
    user1_id int not null,
    user2_id int not null,
    create_at timestamp not null default current_timestamp,
    constraint dm_user_id1_fkey foreign key (user1_id) references users (id),
    constraint dm_user_id2_fkey foreign key (user2_id) references users (id)
)

-- migrate:down

