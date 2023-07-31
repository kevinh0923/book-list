# Book List App

## Prerequisites

- [Node.js v18.11.x+](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 13](https://developer.apple.com/xcode)
- [Cocoapods](https://cocoapods.org)
- [JDK > 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Setup

- Copy `.env.sample` and rename to `.env`.
- Add your env vars to the `.env` file. (It also has default values configured in app settings so you can use the default values as well.)
- Switch your node version to 18.11+.
- Install npm packages and pod-install by one command.
  > `yarn start-ios`

## File Structure

    (root)
    - assets
       Application assets like icons, svg files
    - src
       - api
          Define HTTPClient using Axios for making ASYNC API calls
          Define `book` APIs calls and its react-query queries and mutations
       - components
          Define components
          - common
             Define common components used accross the app
          - form
             Define form components like InputField, RatingField
          - icons
             Define SVG icons
       - navigation
          Define navigation stack. For now, it has only one stack `RootStack` with 2 screens
       - screens
          Define screens
          - Each screen directory would include its components under `components` dir
       - settings
          Define app settings/env vars like `apiUrl`
       - types
          Define types used across the codebase
    - .eslintrc.js
       ESLint config file
    - App.tsx
       App entry file
    - package.json
    - tsconfig.json
       TypeScript config file
    - ...

## App Architecture

### App Flow

Application has 1 navigation stack with 2 screens;

- Book List, which renders a list of books
- Book Detail, where user can create/update a book

When app is loaded, it first navigates to `Book List` screen.

#### Book List

- Header - Title and `New` button, which is used to create a new book
- Book list - Book list using `FlatList` from `react-native`.
  - Book Item
    Book cover image, title, rating and 2 action buttons (Edit, Favorite).
    User can change book's favorite status directly from the list by tapping on the heart icon button.
    User can also edit book by tapping on `Edit` button.

#### Book Detail

- Header
  - Title (Edit/Create Book)
  - Heart button
- Book form
  - Form has basic validation implemented for validating fields values.

### State Management

- `axios` is used to make async API calls.
- `react-query` is used to manage server-side data. It also has `optimistic update` implemented for book update so that it can show instant result to user when user changes book's favorite status from the list screen.

## Improvements

### Code

If I have more time, I'd do more work for;

#### Infinite scroll on the list

I'd like to implement infinite scroll using `useInfiniteQuery` from `react-query` but I can't due to crudcrud.com/api limit.

#### Error handling

Better approach to handle API errors and show them in user friendly way like using ToastMessage.

#### Responsiveness

Based on design size & user's device size, it can calcs scaleRatio and multiply style values by that ratio. There'll be X & Y ratios. X ratio should be used for only horizontal style values like paddingHorizontal while Y ratio should be used for only vertical style values like paddingVertical.

#### Reusable components; Typography, etc

I'd like to create Typography component which has variants and replace all `Text` with the Typography component.

#### Theming

In real mode, we will get design system from design team and build design system in the codebase, which will include colors, font sizes, typographys, paddings, etc

#### Test

Unit test using `jest`, `react-testing-library` and integration test using `detox`

### Design Suggestions

#### Book List

- An ability to create a new book.
  For now, I added `New` button next to the title, which will navigate to create-book screen.
- An ability to directly change favorite status by using the heart icon. (_IMPLEMENTED_)
- Instead of having "Edit" button on the book item, it can be hidden and be shown when user swipes the item.
  When user swipes the book item, it can show extra actions items like Edit (Better to use pencil icon).
- Design for empty list state, loading state.

#### Book Detail (Edit Book)

- Form error state design.
- For `Authors`, it'd be nice to use chip component.
- For `Publish Date`, it'd be nice to use date picker component with inline input func.
