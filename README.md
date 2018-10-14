# Developer Portal

This is a responsive browser - based developer portal which interacts against a dummy API.  It has been developed in ReactJs with Redux for state management and Webpack for code bundling.


## Quick start
* `npm install`
* `npm run start`
* To view the environment, head to `http://localhost:3000`


## Testing

### Unit Tests
Unit tests have been written using Jest and Enzyme
*  `npm run test`

### E2E Tests
End to end tests have been written using Cypress
*  `npm run test:e2e`


## Linting
Eslint has been used to ensure a high code quality
*  `npm run lint`


## Next Steps

### Technical
*  Implement more unit tests to bring the coverage above 80%
*  Implement more E2E tests to further test the whole experience
*  Complete accessibility testing

### Functional
*  Error handling for form inputs
*  Enhance the pagination for users to see how many pages there are instead of just showing a  Next and Previous button
*  Enhance styling to make it more user friendly, such as being able to click outside of the modal to close it
*  Create a 404 page
