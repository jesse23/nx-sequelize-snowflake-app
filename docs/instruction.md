# Example app use using sequelize to snowflake data cloud

## Bootstrap
- Create nx app:
```
npx create-nx-workspace nx-sequelize-snowflake-app

✔ What to create in the new workspace · next
✔ Application name                    · nx-sequelize-snowflake-app
✔ Default stylesheet format           · scss
✔ Use Nx Cloud? (It's free and doesn't require registration.) · Yes
```

- Launch the app to ensure it is created correctly:
```
npx nx serve nx-sequelize-snowflake-app
```

## Basic UI Part
- Load chakra UI:
```
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```

- Follow [this link](https://chakra-ui.com/guides/getting-started/nextjs-guide) to do basic setup.

- Follow [this link](https://chakra-ui.com/guides/integrations/with-react-table) to pull a basic table example
