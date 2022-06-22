## React-SQL-Editor

## Task - Atlan Frontend Engineer

# 1)A basic overview of your project->

A web application where users can run some predefined SQL Queries and they can see the outputs in the screen that is predefined according to query

# 2)The JavaScript framework you chose, along with any major plugins or packages you installed->

The Javascript framework that i have chosen is Reactjs along with I have used tailwind css for styling.
I calculated the performance and load time of this website using these two tools Lighthouse Chrome DevTools

# 3)The page load time of your application, and how you measured this time.

For all the optimal analysis, I have used Google's Lighthouse tool to analysze the page load time, along with how well it performs as per web standards.

# 4)Any optimisations you did to decrease the load time or increase performance.

I have used React.lazy() and suspense for lazy loading of components.I HaveUsed React.Memo() to optimize the render performance whereever need.As i have used tailwind so for smaller css file size I have used PurgeCSS to remove unused styles and optimize my final build .

## I am rendering about 16,000 rows for the mock data query
