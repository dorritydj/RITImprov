<?php

	/**
	* @author Nick Rabb
	* nrabb@outlook.com
	*
	*/

	require __DIR__ . '/bootstrap.php';
	use PayPal\Api\Amount;
	use PayPal\Api\Details;
	use PayPal\Api\Item;
	use PayPal\Api\ItemList;
	use PayPal\Api\CreditCard;
	use PayPal\Api\Payer;
	use PayPal\Api\Payment;
	use PayPal\Api\Address;
	use PayPal\Api\FundingInstrument;
	use PayPal\Api\RedirectUrls;
	use PayPal\Api\Transaction;


	if($_SERVER['REQUEST_METHOD'] == "POST") {

		$apiContext = getApiContext($clientId, $clientSecret);
		
		// Credit card vars
		$card_num = $card_exp_month = $card_exp_year = $card_cvv = $card_first = $card_last = "";
		$card_num = $_POST['card_num'];
		$card_exp_month = $_POST['card_exp_month'];
		$card_exp_year = $_POST['card_exp_year'];
		$card_cvv = $_POST['card_cvv'];
		$card_first = $_POST['card_first'];
		$card_last = $_POST['card_last'];
        $card_type = $_POST['card_type'];

		// Payment item vars
		$num_shirts = "";
		$num_shirts = $_POST['num_shirts'];

		// Billing vars
		$addr_street = $_POST['addr_street'];
		$addr_city = $_POST['addr_city'];
		$addr_state = $_POST['addr_state'];
		$addr_zip = $_POST['addr_zip'];

		// Create a new PayPal Address object
		$addr = new Address();
		$addr->setLine1($addr_street);
		$addr->setCity($addr_city);
		$addr->setCountryCode('US');
		$addr->setPostalCode($addr_zip);
		$addr->setState($addr_state);

		// Create a new PayPal credit card object
		$card = new CreditCard();
		$card->setType($card_type)
			->setNumber($card_num)
			->setExpireMonth($card_exp_month)
			->setExpireYear($card_exp_year)
			->setCvv2($card_cvv)
			->setFirstName($card_first)
			->setLastName($card_last)
			->setBillingAddress($addr);

		// Create a new PayPal funding instrument object
		$fi = new FundingInstrument();
		$fi->setCreditCard($card);

		// Create a new PayPal payer object
		$payer = new Payer();
		$payer->setPaymentMethod("credit_card")
			->setFundingInstruments(array($fi));

		// Create a new PayPal Item object for a shirt
		$item = new Item();
		$item->setName("Improvamonium 2015 t-shirt")
			->setDescription("Improvamonium 2015 t-shirt")
			->setCurrency("USD")
			->setQuantity(intval($num_shirts))
			->setTax(0)
			->setPrice(10);

		$itemList = new ItemList();
		$itemList->setItems(array($item));

		// Create a new PayPal Details object
		$details = new Details();
		$details->setShipping(0)
			->setTax(0)
			->setSubtotal(10 * intval($num_shirts));

		$amount = new Amount();
		$amount->setCurrency("USD")
			->setTotal(10 * intval($num_shirts))
			->setDetails($details);

		$baseUrl = getBaseUrl();
		$redirectUrls = new RedirectUrls();
		$redirectUrls->setReturnUrl("$baseUrl/shirts.php?success=true")
			->setCancelUrl("$baseUrl/shirts.php?success=false");

		$transaction = new Transaction();
		$transaction->setAmount($amount)
			->setItemList($itemList)
			->setDescription("Payment for 2015 Improvamonium t-shirts")
			->setInvoiceNumber(uniqid());

		$payment = new Payment();
		$payment->setIntent("sale")
			->setPayer($payer)
			->setTransactions(array($transaction));

		$request = clone $payment;
		$email = $_POST['email'];

		try {

			$payment->create($apiContext);

			append_order_file($card_first, $card_last, $num_shirts, $email, $payment->getState(), $payment->getId());
			echo $payment->getState();

		} catch (Exception $ex) {

			append_order_file($card_first, $card_last, $num_shirts, $email, $payment->getState(), $payment->getId());
			echo "Error creating PayPal payment: $ex";
		}
	}

	function append_order_file($first, $last, $num_shirts, $email, $state, $id) {

		$filename = "shirt_orders.txt";
		$file = fopen($filename, 'a');
		$entry = date('Y-m-d H:i:s') . "|" . $first . "|" . $last . "|" . $num_shirts 
			. "|" . $email . "|" . $state .  "|" . $id . "\r\n";

		fwrite($file, $entry);
		fclose($file);
	}
?>