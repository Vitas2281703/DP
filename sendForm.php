    <?php
    if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') //проверка на асинхронность
    	{
        $name1 = $_POST['name1'];
        $email1 = $_POST['email1'];
        $telegram1 = $_POST['telegram1'];
    mail("v.veretenov@mail.ru", "Заявка с сайта", "Имя: ".$name1."\nE-mail: ".$email1. "\nTelegram: ".$telegram1 ,"From: v.veretenov@mail.ru \r\n"); //здесь делаем отправку заявки на почту. не забудьте поменять оба адреса
            echo 'Заявка отправлена!';
        	return; //возвращаем сообщение пользователю
        }
        
    ?>