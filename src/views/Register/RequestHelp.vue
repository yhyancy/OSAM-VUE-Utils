<template>
  <div class="osam-page-ibm-font font-style">
    <p class="font-style">
      <b>Request user access</b>
    </p>
    <p
      class="font-style"
    >After you verify your updated profile, the Request access page is displayed. To request access, you must complete the following tasks:</p>
    <ol class="font-style">
      <li>Select the application.</li>
      <li>Select the relationship.</li>
      <li>Select the role.</li>
      <li>Select the user type.</li>
      <li>Select the orders.</li>
    </ol>
    <p class="font-style">
      <b>Selecting the application</b>
    </p>
    <ol class="font-style">
      <li class="font-style">
        Click the list arrow in the
        <b>Application</b> field.
      </li>
      <li class="font-style">
        Select
        <b>Order Status OnLine</b> from the list.
      </li>
      <li class="font-style">
        Click
        <b>Continue</b>.The Relationship page is displayed.
      </li>
    </ol>
    <p class="font-style">
      <b>Selecting the relationship</b>
    </p>
    <ol class="font-style">
      <li class="font-style">
        Click the list arrow in the
        <b>Country</b> field.
      </li>
      <li class="font-style">Select the correct country from the list.</li>
      <li class="font-style">
        Click the list arrow in the
        <b>Relationship</b> field.
      </li>
      <li class="font-style">Select the correct relationship from the list.</li>

      <p class="font-style">The choices in the relationship list include:</p>
      <ul class="font-style">
        <li>
          <span class="help-list font-style"></span>Individual. You are an individual who obtains products from IBM and Lenovo for your personal use.
        </li>
        <li>
          <span class="help-list font-style"></span>Small/Medium business. You are an employee of a small or medium business that obtains products from IBM and Lenovo for a location or several locations in the same country, and you must track orders for your company.
        </li>
        <li>
          <span class="help-list font-style"></span>Large enterprise client. You are an employee of a large enterprise that obtains products from IBM and Lenovo for many locations in a country or multiple countries, and you must track orders for your company.
        </li>
        <li>
          <span class="help-list font-style"></span>Business Partner. You are an employee of an active IBM or Lenovo business partner, and you must track orders for your company and its customers.
        </li>
        <li>
          <span class="help-list font-style"></span>IBM or Lenovo employee. You are an IBM or Lenovo active employee.
        </li>
      </ul>
      <div class="font-style">
        <b>Note:</b> Your User ID must be xxx@ibm.com.
      </div>
      <li class="font-style">Click Continue.The Role page is displayed.</li>
    </ol>
    <p class="font-style">
      <b>Selecting the role</b>
    </p>
    <ol class="font-style">
      <li class="font-style">Click the list arrow in the Role field.</li>
      <li class="font-style">Select the correct role from the list.</li>
      <li class="font-style">Click Continue.The User type page is displayed</li>
    </ol>
    <p class="font-style">
      <b>Selecting the user type</b>
    </p>
    <ol class="font-style">
      <li class="font-style">
        In the
        <b>User type</b> field, select the check box for either
        <b>Casual</b> or
        <b>Expert</b>.
      </li>
      <b class="font-style">Notes:</b>
      <ul class="font-style">
        <li>
          <span class="help-list font-style"></span>
          If you require basic order status information, such what is ordered, when is the order expected to ship, and who is the carrier, for a small number of orders at a given time, select
          <b>Casual</b>.
        </li>
        <li class="font-style">
          <span class="help-list font-style"></span>
          If you must frequently manage and track a large number of orders and perform advanced functions and processes, select
          <b>Expert</b>.
        </li>
      </ul>

      <li class="font-style">
        Click
        <b>Continue</b>.The Orders page is displayed
      </li>
    </ol>
    <p class="font-style">
      <b>Selecting the orders</b>
    </p>
    <ol class="font-style">
      <li class="font-style">
        In the
        <b>Orders</b> field, select the check boxes for
        <b>IBM</b>,
        <b>Lenovo</b>, or both.
      </li>
      <li class="font-style">
        In the
        <b>Optional details</b> field, select the check boxes for
        <b>Pricing information</b>,
        <b>Order comments</b>, or both.
      </li>
      <b>Notes:</b>
      <ul class="font-style">
        <li>
          <span class="help-list font-style"></span>The pricing information includes unit price, feature price, model price, line item price, and order price (when it is available).
        </li>
        <li>
          <span class="help-list font-style"></span>The order comments include ???
        </li>
      </ul>
      <li class="font-style">
        Click the list arrow in the
        <b>Date format field</b>.
      </li>
      <li class="font-style">Select the correct date format from the list.</li>
      <li class="font-style">
        Click
        <b>Continue</b>.The Entitlements page is displayed, and the Entitlements tab is selected.
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: 'RequestHelp'
}
// block browser rollback
history.pushState(null, null, document.URL)
window.addEventListener('popstate', function () {
  history.pushState(null, null, document.URL)
})
</script>
<style>
.help-list {
  float: left;
  margin-right: 10px;
  margin-top: 11px;
  width: 8px;
  height: 8px;
  background-color: #00000052;
  border-radius: 4px;
}
.font-style {
  font-size: 0.9rem;
}
</style>
