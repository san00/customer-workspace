# Customer Support Console

## Problem

Support agents need to quickly find and review customer information during customer interactions. Delays in locating information can increase handling times and create a frustrating experience for both support staff and customers.

## Goal

Build an accessible customer lookup experience that enables support teams to efficiently search, review and manage customer information.

## Current implementation

- Defined a TypeScript customer data model.
- Added a mock customer data source to support development before backend integration.
- Introduced an API boundary between the UI and data source, allowing the underlying data source to be replaced without changing the frontend.

## Technical approach

The application communicates with customer data through an API layer rather than accessing the data source directly. Customer data is currently mocked locally to simulate backend responses, but this approach allows the data source to be replaced with a real backend API while keeping the UI implementation unchanged.

## Planned improvements

- Customer list
- Search
- Filtering
- Sorting
- Pagination
- Customer details
- Loading, empty and error states
- Accessibility improvements
- Testing
- Refactoring

## Getting Started

Start the development server:

```bash
pnpm dev
```

Open http://localhost:3000 in your browser to view the application.

The customer API is available at:

http://localhost:3000/api/customers
