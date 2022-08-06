function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}
