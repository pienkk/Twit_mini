-- migrate:up
ALTER TABLE users ADD birthday DATE NOT NULL

-- migrate:down

