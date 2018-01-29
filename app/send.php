<?php
/**
 * @version		$Id: mailler.php 502 2012-03-27 18:20:42Z cleverscript $
 * @package		send.php
 * @author		Cleverscript http://www.cleverscript.ru
 * @copyright	Copyright (c) 2008 - 2011 Cleverscript, a business unit of Nuevvo Webware Ltd. All rights reserved.
 * @license		GNU/GPL license: http://www.gnu.org/copyleft/gpl.html
 */
 
header('Content-Type: text/html; charset=utf-8');
	
$to = "order@mirgorodkurort.in.ua,selickaya-svetlana13@yandex.ua";
$subject = "Заявка на бронирование";

$sanatory = $_POST["sanatory"];
$c_old = $_POST["c-old"];
$c_child = $_POST["c-child"];
$num = $_POST["num"];
$date = $_POST["date"];
$days = $_POST["days"];
$nameroom = $_POST["nameroom"];
$phone = $_POST["phone"];
$name = $_POST["name"];
$email = $_POST["email"];

$redirect = "http://www.testpage.ho.ua/pages/Murgorod/sucess.html";
$base = "http://www.testpage.ho.ua/pages/Murgorod/order.html";

$data_charset = "UTF-8";
$send_charset = "KOI8-R";

function mime_header_encode($str, $data_charset, $send_charset) {
  if($data_charset != $send_charset) {
    $str = iconv($data_charset, $send_charset, $str);
  }
  return '=?' . $send_charset . '?B?' . base64_encode($str) . '?=';
}
	
if($sanatory!="" && $c_old!="" /*&& $c_child!=""*/ && $num!="" && $date!="" && $days!="" && $nameroom!="" && $phone!="" && $name!=""){


	$subject = mime_header_encode($subject, $data_charset, $send_charset);

	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
 	$headers .= 'From: order@mirgorodkurort.in.ua' . "\r\n" ;
 	$headers .= 'Reply-To: order@mirgorodkurort.in.ua,selickaya-svetlana13@yandex.ua' . "\r\n" . 'X-Mailer: PHP/' . phpversion();
	
	$body = "<b>Санаторий</b>:  ".$sanatory."<br/>".
		    "<b>Взрослых</b>:  ".$c_old." чел<br/>".
		    "<b>Детей до 18 лет</b>:  ".$c_child." чел<br/>".
		    "<b>Категория номера</b>:  ".$num."<br/>".
		    "<b>Желаемая дата заезда</b>:  ".$date."<br/>".
		    "<b>Количество дней пребывания</b>:  ".$days."<br/>".
		    "<b>Бронировать на</b>:  ".$nameroom."<br/>".
		    "<b>Мобильный телефон</b>:  ".$phone."<br/>".
			"<b>E-mail</b>:  ".$email."<br/>".
		    "<b>Контактное лицо</b>:  ".$name."<br/>";
	
	/*$body = "Санаторий:  ".$sanatory."\r\n".
		    "Взрослых:  ".$c_old." чел\r\n".
		    "Детей до 18 лет:  ".$c_child." чел\r\n".
		    "Категория номера:  ".$num."\r\n".
		    "Желаемая дата заезда:  ".$date."\r\n".
		    "Количество дней пребывания:  ".$days."\r\n".
		    "Бронировать на:  ".$nameroom."\r\n".
		    "Мобильный телефон:  ".$phone."\r\n".
		    "Контактное лицо:  ".$name."\r\n";*/

	if(mail($to, $subject, $body, $headers)){

		Header( "HTTP/1.1 301 Moved Permanently" );
		Header( "Location: $redirect" );  
		exit();
		
	}else{
		$data = "Ошибка отправки сообщения";
		Header( "HTTP/1.1 301 Moved Permanently" );
		Header( "Location: $base" ); 
		exit();
	}
		
}else{
	Header( "HTTP/1.1 301 Moved Permanently" ); 
	Header( "Location: $base" ); 
	exit();
}
?> 