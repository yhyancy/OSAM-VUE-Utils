<template>
  <div class="osam-page-ibm-font font-style">
    <p class="font-style">
      <b>Verify your profile</b>
    </p>
    <p class="font-style">
      After you submit your updated profile, the Order Status OnLine Authorization Manager, Profile page is displayed, and the
      <b>Verify profile</b> tab is selected. Your updated profile information is displayed on this page.
    </p>
    <div class="font-style">
      1.If your profile information is correct, click
      <b>Continue</b>.
    </div>
    <div class="font-style">
      2.In your profile information is incorrect, click
      <b>Update your profile</b>.
    </div>
    <div class="font-style">
      <b>Note:</b> For instructions and information about updating your profile, view Update your profile.
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileHelp'
}
// block browser rollback
history.pushState(null, null, document.URL)
window.addEventListener('popstate', function () {
  history.pushState(null, null, document.URL)
})
</script>
<style>
.font-style {
  font-size: 0.9rem;
}
</style>
