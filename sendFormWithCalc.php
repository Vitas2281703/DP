    <?php
    if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') //проверка на асинхронность
    	{
        $name = $_POST['name'];
        $email = $_POST['email'];
        $telegram = $_POST['telegram'];
        $baseblock = $_POST['base-block'];
        $dynblock = $_POST['dyn-block'];
        $funcblock = $_POST['func-block'];
        $check_headerfooter = $_POST['check-headerfooter'];
        switch ($check_headerfooter){
            case 1500:
                $rh = "+";
                $rf = "-";
                $rhf = "-";
                $nrhf = "-";
                break;
            case 1501:
                $rh = "-";
                $rf = "+";
                $rhf = "-";
                $nrhf = "-";
                $check_headerfooter = 1500;
                break;
            case 2500:
                $rh = "-";
                $rf = "-";
                $rhf = "+";
                $nrhf = "-";
                break;
            case 0:
                $rh = "-";
                $rf = "-";
                $rhf = "-";
                $nrhf = "+";
                break;    
        }

        switch ($_POST['pravki-check']){
            case 1:
        $np = "+";
        $yp = "-";
        $pravki_check = 0;
                break;
            case 7000:
        $np = "-";
        $yp = "+";
        $pravki_check = 7000;
                break;   
        }
        if (isset($_POST['delete-cont'])){
            $dc = "+";
        }else{
            $dc = "-";
        }
        if (isset($_POST['add-cont'])){
            $ac = "+";
        }else{
            $ac = "-";
        }     

        $totalCost = $_POST['base-block']*1500+$_POST['dyn-block']*3000+$_POST['func-block']*5000+$check_headerfooter+$pravki_check;
   
    mail("v.veretenov@mail.ru", "Заявка с сайта", "Имя: ".$name."\nE-mail: ".$email. "\nTelegram: ".$telegram. 
    "\n\n--------------------------------\n\nБазовых блоков: ".$baseblock."\nДинамичных блоков: ".$dynblock."\nФункциональных блоков: ".$funcblock.
    "\nРедизайн хедера: ".$rh."\nРедизайн футера: ".$rf."\nРедизайн хедера и футера: ".$rhf.
    "\nРедизайн хедера и футера не нужен: ".$nrhf."\nБез правок: ".$np."\n1 итерация правок: ".$yp.
    "\nУбрать контент: ".$dc."\nДобавить контент: ".$ac."\nИтоговая стоимость: ".$totalCost
    ,"From: v.veretenov@mail.ru \r\n"); //здесь делаем отправку заявки на почту. не забудьте поменять оба адреса
            echo 'Заявка отправлена!';
        	return; //возвращаем сообщение пользователю
        }
    ?>