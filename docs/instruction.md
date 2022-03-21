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

- Follow [this link](https://chakra-ui.com/docs/components/overlay/modal) to pull a basic modal example
  - [form control](https://chakra-ui.com/docs/components/form/form-control)

- [chart](https://codesandbox.io/s/jzjzr57jw?file=/demo.jsx)

## Backend
https://beeman.dev/posts/add-a-nestjs-api-to-a-nx-workspace-24f/

```
npm i -D @nrwl/nest
nx generate @nrwl/nest:app nx-sequelize-snowflake-api
```

## sequelize
https://docs.nestjs.com/recipes/sql-sequelize#sql-sequelize
https://sequelize.org/v7/manual/dialect-specific-things.html

## new lib
```
npx nx g @nrwl/nest:library user --controller --service
npx nx g @nrwl/nest:library forecast --controller --service
```
