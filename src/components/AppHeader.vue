<template>
    <header>
        <p>My Wine Book</p>
        <nav>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/WineList">Wine List</router-link></li>
        <li><router-link to="/wineTasting">Wine Tasting</router-link></li>
    </nav>
    </header>
</template>

<style lang="css">
  header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: .5rem 1rem;

    p {
      margin-left: 1rem;
    }
  }

  nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1rem;
    }
  }
</style>