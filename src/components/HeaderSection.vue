<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <RouterLink to="/" class="header__link">Strona główna</RouterLink>
        <RouterLink to="/config" class="header__link">Konfiguracja</RouterLink>
      </nav>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #00bd7e;
  text-align: center;
  padding: 20px 0;
  margin-bottom: 40px;
  box-shadow: 0 14px 24px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  &__nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__link {
    font-weight: bold;
    margin: 0 10px;
    &[aria-current='page'] {
      text-decoration: underline;
    }
  }
}
</style>
