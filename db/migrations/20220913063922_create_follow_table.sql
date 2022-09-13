-- migrate:up
create table follows(
    id int not null auto_increment primary key,
    follow_from int not null,
    follow_to int not null,
    constraint follow_ukey unique (follow_from, follow_to)

)

-- migrate:down

