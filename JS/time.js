var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
});
