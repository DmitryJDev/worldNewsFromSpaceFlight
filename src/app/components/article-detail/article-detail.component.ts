import {
  Component,
  inject,
  signal,
  effect,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  OnDestroy,
  ViewChildren, QueryList
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <div class="container">


    @if(loading()){

      <div class="loading-container">

        <mat-spinner></mat-spinner>
        <p>Loading article...</p>
      </div>
      }

      @if(article() && !loading()){
        <div>
                <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque provident,
      ratione minima, aliquid animi harum obcaecati saepe ex, fuga nemo optio
      dolore hic laboriosam voluptatem! Quaerat alias iste odit, molestiae totam
      debitis perspiciatis nulla unde aut mollitia obcaecati voluptas et
      necessitatibus consequatur earum, dicta quisquam iusto exercitationem ab
      accusantium atque accusamus. Accusantium odit, sed eveniet error
      laudantium vitae unde tempora blanditiis quidem optio quaerat omnis eum
      nesciunt dolor consequatur perferendis tenetur minima deleniti,
      praesentium, pariatur ex! Reprehenderit laboriosam aliquam adipisci
      eveniet aut ratione, quaerat unde blanditiis architecto eos optio officia
      repellat eius libero qui molestias incidunt recusandae dignissimos. Minus
      laudantium maiores dignissimos eaque maxime, minima iure similique nobis
      sequi atque reiciendis corporis beatae, voluptatum debitis veniam totam
      ab? Molestiae minima doloribus libero corrupti ipsa voluptatem
      exercitationem quo dolores ex porro dolor distinctio nulla esse architecto
      rem aliquam voluptatum delectus, id, dicta quam, necessitatibus
      consequuntur deleniti corporis suscipit? Aperiam quisquam eius dicta
      ratione, dignissimos corrupti eveniet consequuntur, ducimus cumque, soluta
      amet libero expedita? Quibusdam, molestias! Possimus alias eius cumque
      consequuntur aperiam perspiciatis odit reprehenderit debitis ipsa rerum
      necessitatibus, dolorum iure eos commodi quod inventore deserunt saepe
      omnis esse exercitationem earum ut sunt. Ipsa labore ab excepturi
      blanditiis atque quidem deserunt laudantium voluptas nam quibusdam! Ullam
      in explicabo sequi at ex modi delectus eos. Sit corporis incidunt
      repellendus dicta veritatis odit! Facilis laborum nam animi, qui culpa
      necessitatibus architecto ad minima itaque dolores voluptas, in libero
      assumenda debitis tempora quasi nobis minus corporis maiores dolorem ipsum
      deserunt! Libero, adipisci. Illo, voluptates fugiat quia dolore doloremque
      distinctio repellat consectetur architecto incidunt reprehenderit quaerat,
      odio sapiente earum hic vero. Iusto ducimus aperiam fuga quibusdam est rem
      officia facilis ipsum reiciendis alias debitis asperiores molestias
      dignissimos sapiente sint, quaerat blanditiis labore repudiandae magni
      vitae modi at dolorum fugiat? Repellendus autem, alias odit ab sit aliquid
      similique placeat quaerat debitis dolore incidunt! Sint at officiis,
      molestias exercitationem dolorum alias optio ea voluptatum nihil sit,
      aliquid amet eveniet et, odit necessitatibus ducimus cumque. Quidem, ipsa
      porro tempora minima, eaque voluptatum labore molestias dicta dolor
      molestiae deleniti eum dolorem nihil eius corrupti sapiente ad
      dignissimos. Porro quidem vitae nostrum obcaecati eum veritatis dolorem
      quia eaque adipisci suscipit perferendis ipsa eveniet soluta ratione ullam
      dolores et explicabo, a, doloribus minima non, quisquam quas. Excepturi
      saepe tempora sequi. Officiis accusantium dicta magnam repellendus vero
      laborum. Soluta aspernatur possimus quibusdam inventore maxime numquam
      provident laudantium eius illum voluptatum magni doloribus, obcaecati
      porro voluptate quod ad facere illo rem eaque quasi qui libero sequi! Ea
      enim accusantium ad, officiis perferendis cupiditate. Consequatur dolor
      pariatur quae vitae tempore incidunt repellat cumque, voluptatibus laborum
      aspernatur et ipsa odio nisi perspiciatis soluta officia eaque cum optio
      architecto itaque quo. Soluta consectetur ratione facere tempora, quasi
      aliquid quia expedita facilis repellat repellendus perspiciatis doloribus
      incidunt vel, reprehenderit saepe, aliquam beatae perferendis. Earum,
      asperiores eos. Distinctio assumenda blanditiis aliquid incidunt similique
      cum, harum vitae officiis, aliquam adipisci mollitia asperiores officia
      ea! Voluptate ducimus reprehenderit excepturi deleniti iusto ratione vero
      rerum, distinctio ipsa assumenda? Consectetur aspernatur ut minima modi
      sapiente blanditiis eligendi suscipit accusamus praesentium qui, quod aut
      tempora perferendis impedit quo exercitationem, ab assumenda aliquam.
      Reiciendis aperiam recusandae fuga! Hic repellat amet eligendi veritatis
      adipisci architecto neque saepe ut obcaecati possimus earum reprehenderit,
      ipsam corporis sed perferendis consequuntur iste recusandae dolore magni,
      odit eos beatae voluptatem excepturi! Vitae praesentium veritatis voluptas
      eum animi maiores consequatur ex obcaecati ullam, est a, impedit excepturi
      voluptatum assumenda fugit inventore deleniti rem iure blanditiis id
      itaque. Ducimus eveniet, consequuntur molestiae laudantium nisi eius
      expedita voluptas aliquam a perspiciatis quia enim dignissimos explicabo
      eaque tempore vel ipsum doloremque accusantium praesentium magni, sapiente
      autem. Quibusdam labore perspiciatis repellendus corrupti necessitatibus
      eveniet aspernatur illum minima, a facilis asperiores sit. Voluptate,
      commodi impedit? Debitis modi voluptates rerum ex sit voluptatibus ipsum
      aperiam ab suscipit illum, impedit aliquid doloremque. Quae quod labore
      perspiciatis ex, omnis corrupti debitis sapiente voluptas officiis nobis
      eum, minima doloribus error tenetur eligendi praesentium harum voluptatum
      quo exercitationem magni! Incidunt eaque earum quidem numquam veniam ab id
      quod voluptatibus! Sapiente dicta minus nemo, natus, pariatur quae qui ut
      recusandae magni iste blanditiis exercitationem enim cupiditate officiis
      labore libero fugit laudantium dolor illo sit neque facere, molestias
      dolores dolorum. Quisquam ipsa blanditiis molestiae illo quaerat natus eum
      officia deserunt quis impedit alias dignissimos, sit fugiat qui magnam
      neque, sint excepturi obcaecati maiores at consequatur. Sapiente harum
      itaque distinctio repellat architecto dolor maxime fugiat laudantium id
      natus consectetur error nemo officiis perferendis modi voluptatum quod,
      quos cumque dolore impedit quam cupiditate aperiam hic veritatis. Modi,
      ipsam perferendis eveniet animi esse veniam totam quidem sit optio quam
      cupiditate sapiente quia aspernatur iste voluptas aut in architecto sequi
      voluptate est consectetur nisi dolore doloribus officia! Officia voluptate
      ipsam eum totam doloremque sint deleniti, nobis fuga cupiditate quis illum
      perferendis laboriosam a alias dolor consequatur recusandae. Debitis
      delectus, magni at molestias vel optio odio harum, perspiciatis veniam
      eligendi dolores corrupti, enim natus ut facere ea eaque aspernatur minus!
      Molestias, officia sit aliquam non aliquid, magni magnam rerum quo
      sapiente quae, amet nisi corrupti natus quis vero blanditiis? Possimus,
      quis ipsam. Veritatis modi neque, maiores dolores saepe iure tempore eos
      minus quibusdam nostrum provident reiciendis rerum quasi tempora? Nihil
      placeat veritatis, odit molestiae exercitationem quo! Veritatis nostrum
      magni saepe? Iusto eius, laboriosam qui, ducimus repudiandae non inventore
      labore neque ipsa recusandae laborum, quam nisi voluptas illo in magni
      placeat. Velit, nostrum. Eum amet delectus libero nemo, sequi quis nisi
      adipisci voluptatum, porro fugit excepturi a veritatis dicta praesentium
      placeat incidunt illo. Quidem ipsam cupiditate quis facilis incidunt animi
      in consequatur sequi quibusdam repellat, itaque ducimus. Reprehenderit
      unde veniam, a impedit aliquid aspernatur cupiditate, perferendis aut
      culpa at repellendus odit obcaecati mollitia recusandae repellat
      exercitationem maxime laboriosam pariatur optio vel ipsa doloremque
      corrupti officia animi! Animi sunt incidunt maiores, vero ipsa suscipit
      voluptatem. Sit laboriosam repellat eum quod tempora quis. Quae, repellat
      aliquam ex dolores minima ut cupiditate neque dolor quam sunt quidem
      nesciunt autem ab illo veniam obcaecati asperiores aspernatur suscipit.
      Architecto quidem cumque laboriosam esse omnis est eos reprehenderit id
      adipisci numquam accusantium facere totam eligendi aut beatae ullam,
      voluptatibus ad, ducimus repudiandae eveniet cum aliquam ex deleniti.
      Quasi perferendis corporis facilis accusantium aspernatur et? Provident
      aperiam repellat magni modi, alias iusto? Ex consectetur, perferendis
      beatae corrupti dolor adipisci voluptates expedita obcaecati, laborum
      aliquid quaerat nihil earum doloremque! Ut nihil incidunt, quaerat dolor
      odio recusandae iure consequatur tempora tempore, ex cum obcaecati eaque?
      Non, eaque numquam cumque veritatis maiores provident at aut quas itaque
      ex animi porro esse, maxime explicabo dolore ducimus dolorem nisi incidunt
      accusamus! Esse eos reiciendis minima et recusandae quae ducimus.
      Doloremque ab molestiae, corporis aperiam eligendi ut, commodi fugit saepe
      sapiente nemo neque non minima repellendus nihil impedit itaque odio. Ex
      fugit ullam voluptatibus repellat omnis, veniam commodi accusantium nihil
      dolorum sint obcaecati optio cum autem nesciunt quo ratione eius vitae ea
      quam eos dicta consequuntur! Animi fugiat illum ut, magnam laboriosam
      facilis ad cum nihil amet consequatur, accusantium, nam at. Nesciunt et
      ipsa odio repellendus rem sint sapiente nisi nobis id maxime velit a neque
      quod ducimus fugiat praesentium illum similique, ipsam illo animi eum,
      repellat atque! Illum voluptatibus rem est. Aliquam, officia ratione.
      Corrupti placeat asperiores similique architecto recusandae consectetur,
      distinctio nobis ducimus tempore repellat perferendis maiores aperiam
      culpa, porro incidunt doloribus minus corporis! Est natus expedita sit
      itaque vitae? Odit, placeat, accusantium beatae explicabo possimus nobis
      repudiandae libero nesciunt iste optio error earum id quam obcaecati
      molestiae voluptates. Expedita eos voluptatem deleniti, dolorem rem minus
      corrupti, harum ex, sapiente repellendus consectetur nulla quisquam sed
      officia eaque facilis commodi doloribus. Aperiam exercitationem eos
      consequatur esse repellat? Impedit illum porro explicabo. Cupiditate,
      minus quos, facilis unde tempora pariatur temporibus blanditiis dolor
      minima dolore necessitatibus assumenda corrupti qui consequuntur libero?
      Soluta ipsam tempore neque illo facilis quos repudiandae voluptatum
      quidem. Impedit ex culpa id, magnam, aut excepturi error ratione rem
      explicabo adipisci architecto sed labore aspernatur. Illum fugiat deleniti
      quis, optio eveniet libero ratione placeat suscipit aspernatur error
      maiores odit totam accusantium labore delectus commodi veritatis fuga
      nihil eaque. Nam consequuntur accusantium hic sunt, ratione velit qui,
      tempora ipsam iste, vel libero magni. Nam doloremque sequi repudiandae
      dignissimos iusto asperiores, voluptas ex cum officiis fugiat ab mollitia
      animi amet architecto ad at obcaecati libero in dolorum minus fuga.
      Cupiditate voluptas aliquid ducimus ad, laudantium sed aspernatur quisquam
      veniam? Cupiditate, voluptatibus quam, nostrum quo ipsum in quia minus
      aliquid iusto quis architecto iure quos quae hic. At iste magnam, id
      expedita aut, provident earum odit odio temporibus natus dolorum
      blanditiis exercitationem. Ipsa aspernatur explicabo error modi laudantium
      dolores, incidunt tempora a quia quasi debitis quae, deserunt eos impedit
      natus odio et mollitia architecto consequuntur itaque delectus tempore!
      Nam fugit quae voluptatum sapiente? Nostrum earum exercitationem
      laboriosam recusandae praesentium. Qui, recusandae praesentium laudantium
      necessitatibus nemo, quidem nesciunt voluptatum facere magnam porro
      officiis adipisci fugiat molestias expedita laboriosam atque
      exercitationem voluptatem sapiente veniam quasi odit nisi! Repudiandae
      sapiente cumque molestiae aliquid natus odio veniam temporibus error!
      Debitis ab ipsa, laudantium porro ipsam dolores earum quae voluptate
      voluptas iusto omnis perspiciatis nesciunt odit quisquam laborum delectus
      hic. Fugiat eum eius neque voluptatem necessitatibus delectus libero
      itaque voluptates harum quia cumque eveniet, quam, quibusdam iure
      aspernatur. Voluptatibus esse, sint nisi dolorum explicabo aliquam
      delectus mollitia id quidem ducimus impedit similique a sunt, harum
      magnam, autem quia ab velit cumque enim animi fuga dolor? Neque harum odit
      perferendis voluptatum, iure sint ratione dolore! Aliquid quis repellendus
      iste ducimus et accusantium quia ratione at perferendis. Earum, dicta ad
      repudiandae fugiat, error itaque voluptatibus consequatur possimus quas
      quidem pariatur nostrum perferendis quis! Sapiente autem necessitatibus
      ratione animi, maxime nostrum saepe fugiat et rerum, at quod! Fugiat,
      reprehenderit nostrum dolor facere veritatis porro laudantium cumque,
      natus, odio vero molestiae? Tempora, reiciendis voluptatem ipsum porro
      iste iure commodi fugiat labore, quaerat accusantium voluptate impedit
      sunt odit blanditiis quibusdam facere ad voluptatibus rerum earum
      assumenda. Praesentium temporibus atque maxime alias eos! Laudantium minus
      tempora, in pariatur tempore velit minima veniam deserunt atque, nulla
      facere fugit fuga inventore magni libero similique consequatur dicta.
      Molestiae quaerat necessitatibus ullam aut, officiis qui alias vel quo
      magnam ab aspernatur dolor debitis fuga sequi doloremque ratione nesciunt
      sint odio, facilis blanditiis reprehenderit? Non aspernatur consequuntur
      ipsum obcaecati voluptatem, quo rerum laborum vero pariatur tempora libero
      sapiente modi nisi officiis voluptas doloremque corrupti in deserunt
      fugit, saepe accusantium, porro odio! Perspiciatis ipsum enim cum sit
      soluta ratione fugit, nihil tempore nemo impedit pariatur, commodi, sed
      laborum minus eveniet eligendi doloremque architecto hic voluptatum ad vel
      voluptate natus. Quis aliquam recusandae dolorum esse ea quo non, iste
      sapiente impedit accusantium eum eveniet sint temporibus consequuntur
      magni! In quisquam veniam iure asperiores ut, cupiditate architecto
      voluptatibus sed maxime modi ab adipisci nihil fugit, debitis molestiae
      ipsum, eum qui inventore odio harum? Minus eius sunt excepturi quaerat
      dolorum harum enim perspiciatis vero exercitationem qui debitis doloribus
      aliquam fugit est cum necessitatibus velit nobis alias eum, nostrum non
      suscipit quibusdam incidunt! Accusantium tempore veniam delectus accusamus
      totam distinctio est nobis, esse reiciendis similique quibusdam maiores
      ducimus sed! Similique corrupti magnam tenetur dignissimos optio rem
      delectus quas ducimus maxime. Libero, eligendi explicabo! Labore porro
      suscipit nobis. Labore harum consequuntur assumenda voluptatem eaque?
      Facere assumenda aspernatur vel perferendis? Illum, et quae, earum
      possimus tempora fuga minima iusto odio quos illo perspiciatis sit ipsa
      delectus deleniti consectetur similique aliquid saepe id repellat pariatur
      magni? Omnis, ratione doloremque. Quaerat praesentium animi rem corrupti
      at modi laboriosam facere labore magnam magni. Voluptates mollitia
      voluptate porro laborum quis facere architecto vero quo tenetur, vitae,
      distinctio deleniti perspiciatis nemo consequuntur. Ratione dolorem alias
      necessitatibus eaque. Perferendis, delectus nobis deserunt totam enim ut.
      Voluptatibus distinctio blanditiis rerum, consequatur optio cumque
      adipisci minima eaque enim, iusto harum veniam dolorum temporibus dicta
      saepe quia aut placeat. Consectetur dolorum sit dolores ducimus, odit
      cupiditate? Voluptatum assumenda incidunt dicta quam illum saepe obcaecati
      consectetur consequuntur laudantium! Repellat eveniet ex ipsam nisi
      eligendi, odio error quia exercitationem sed nemo explicabo maiores quos
      perferendis quisquam eum? Explicabo iure eos, voluptatum doloremque eius
      aliquid vel impedit? Natus, adipisci excepturi! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Enim amet dolorum similique aut sint porro
      quasi molestiae minus doloremque odio deleniti expedita laboriosam dolorem
      facere quaerat recusandae sapiente, architecto, sunt omnis natus in harum
      id error. Odio sit, necessitatibus repudiandae pariatur quidem rem
      assumenda doloribus animi at tempore natus cum molestiae corrupti vel
      ullam sed minus eos modi, iure molestias ipsa aperiam vitae architecto
      libero? Sunt natus nisi et reiciendis assumenda numquam ipsa fugit culpa
      vero laborum quod nemo eaque molestiae excepturi eveniet deserunt nesciunt
      possimus, ut consectetur impedit consequuntur repellat eum laboriosam.
      Dignissimos doloribus tempora doloremque expedita! Amet qui architecto
      perspiciatis natus totam ad eos ullam facere laboriosam iure enim quam
      asperiores ratione velit sunt, nam odio, neque molestiae placeat impedit.
      Sint quasi saepe mollitia asperiores quos provident corporis quam animi
      tempore, sunt modi magni earum officiis ipsum fugiat odit libero iure eos!
      Quos, sit! Voluptatum sit illo sint, eligendi perferendis delectus
      officia. Error, distinctio eius vitae veniam sunt illum voluptatem, nam
      fuga illo tempore sint at sequi repudiandae pariatur tempora quibusdam!
      Repellendus ducimus ex placeat officia sed aliquid, vero saepe culpa
      cupiditate ipsam laboriosam amet ipsa neque! Dicta perspiciatis blanditiis
      sunt, dolorem ut eius nobis cum soluta magni ipsa alias mollitia
      praesentium excepturi pariatur sequi, eaque odio esse animi? Explicabo
      fugit consequuntur provident voluptatum repellat exercitationem ipsam nisi
      iusto earum? Explicabo corporis non veritatis possimus sint nisi assumenda
      repellat laborum provident alias cumque perferendis voluptates
      reprehenderit, nemo adipisci corrupti eum eaque? Pariatur voluptatem
      doloribus inventore deserunt consequatur excepturi et vitae cum molestias
      aspernatur voluptas similique quibusdam, tempore odit sed minus.
      Reiciendis accusamus soluta corrupti dolore officia animi consequuntur
      illum explicabo cupiditate earum et nobis inventore recusandae laudantium
      laboriosam voluptatem odio doloribus obcaecati tempore aut, ex qui
      aspernatur aliquid? Exercitationem quos doloremque, obcaecati voluptatum,
      voluptatibus facilis tenetur harum aperiam ipsum molestiae nam cum beatae
      totam sed maiores saepe illo nisi, ad nobis incidunt est amet
      reprehenderit sit! Totam aut vel non at voluptatem, rem explicabo atque
      quidem vero aspernatur obcaecati culpa magnam excepturi et adipisci nemo
      in, perspiciatis reprehenderit accusamus eius reiciendis. Fugiat animi
      dicta repudiandae odio tempora reiciendis ipsam fuga odit perspiciatis
      corrupti ratione quaerat, accusantium, eveniet eaque harum mollitia enim
      earum sed officiis vero praesentium autem? At corporis quis illo aliquam
      facere dicta eaque voluptates! Vero mollitia libero, omnis officia, porro
      molestiae sint numquam aspernatur, molestias cumque voluptate architecto
      earum! Illum ea eius consequatur animi facilis earum corporis ullam vitae
      fugiat quos iure obcaecati quibusdam voluptate praesentium vero, nemo
      repudiandae voluptatibus aperiam neque soluta necessitatibus repellendus
      quasi exercitationem expedita! Numquam maiores iure quisquam dolor
      asperiores expedita culpa. Alias animi maiores deleniti nesciunt ea
      voluptas pariatur minus iusto eius sed cumque ad molestiae neque maxime
      quasi voluptatem aperiam iure, quidem assumenda natus in nostrum provident
      sit? Corporis error quae optio natus dolorum architecto quidem, vel in
      consectetur rerum animi illo placeat veniam ut sint, officia fugiat
      numquam fugit provident? Est et possimus dolorum, fugiat quo sed. Porro
      dolore consequuntur suscipit similique nulla modi, fugit laudantium
      deserunt tenetur, quaerat error aperiam magni esse ullam dolor
      repellendus. Explicabo nostrum et minima quidem corrupti, ratione nobis
      placeat similique sequi? Vitae possimus expedita sint asperiores neque rem
      optio illo numquam a maiores. Optio quas tempora laborum dolorem
      necessitatibus temporibus provident ipsam pariatur adipisci impedit
      tenetur labore alias eius voluptatum amet neque ut consectetur
      exercitationem cum aliquid accusamus quia, dolorum praesentium aut? A,
      nulla? Voluptatem vitae nesciunt molestias doloremque, illum nemo beatae,
      minus est eligendi ipsa necessitatibus enim optio saepe, maxime
      consequatur quam quasi libero veritatis et aperiam itaque? Sapiente, vel
      deserunt? Non maiores, nemo earum, quasi eius id hic, et saepe dolores
      atque ratione molestiae in! Similique dolore explicabo rerum iusto hic
      quos beatae, omnis atque cupiditate possimus non dolores ullam nemo quis
      repellendus officiis quasi animi a quisquam reprehenderit ab velit.
      Temporibus nisi harum eligendi non aperiam velit! Ipsam iusto corrupti
      amet, dolorum ex sapiente labore reiciendis delectus. Culpa dignissimos
      quod architecto a iste dicta, fugiat expedita necessitatibus blanditiis
      consectetur tempore porro. Nihil, nesciunt distinctio et earum quos
      nostrum soluta ab ea dignissimos doloremque velit non, fugiat reiciendis.
      Consectetur cumque saepe ipsum quod ullam sit quia impedit, sunt
      praesentium dolore corporis dolorem eius illo, delectus repellendus. Iste
      repudiandae illo ratione ad. Harum, quam? Optio, quos. Repellat delectus
      earum maxime inventore doloremque blanditiis culpa numquam explicabo ullam
      ipsa at soluta sequi adipisci repellendus vel placeat iste aut expedita,
      mollitia suscipit quos ducimus eius odit! Tempora itaque id veniam earum
      ducimus numquam assumenda nulla culpa, temporibus placeat asperiores rem
      minima aperiam sint consequatur! Laborum modi deserunt quo recusandae ea
      et nam placeat odit minus, non harum commodi praesentium iusto natus
      quisquam dicta qui veritatis explicabo deleniti. Incidunt delectus quo
      alias ipsum ut magni rerum. Blanditiis asperiores eveniet architecto
      repellat, sed, laborum, corrupti in quos ut ullam qui. Deleniti illo
      eveniet omnis doloremque rem assumenda dolor dignissimos, necessitatibus
      voluptatum minus eius esse veniam aut alias pariatur voluptatibus mollitia
      harum non! Possimus assumenda quisquam recusandae. Molestias, modi esse
      ipsa recusandae et error voluptas distinctio non, neque incidunt
      architecto quis magnam dolore quod saepe. Harum quasi at laborum! Ipsa
      nisi distinctio, eveniet nihil dicta sint obcaecati quia veritatis.
      Corrupti quos quam delectus nihil cumque ab tenetur voluptate minus,
      reprehenderit laboriosam distinctio corporis exercitationem possimus vitae
      aperiam? Ipsum quidem eum quo. Fuga impedit ab ducimus odio eaque natus ad
      corrupti nam placeat adipisci laboriosam repudiandae sit cumque dolorem,
      est veritatis quia? Incidunt doloribus assumenda veniam sed beatae
      excepturi rerum corrupti recusandae alias, magnam quibusdam veritatis odio
      at consequatur praesentium inventore velit quis debitis hic ipsum nulla
      nobis! Amet laboriosam odio non eligendi asperiores ullam totam aperiam,
      obcaecati et enim inventore, eius dolorem iusto. Nostrum perspiciatis
      accusamus fugiat numquam enim cum quos temporibus aspernatur et?
      Aspernatur adipisci libero ducimus enim tempora, dolorum nam minima est
      deleniti ea eaque nemo necessitatibus asperiores quidem nostrum sit a
      officiis excepturi animi iusto laborum doloremque! Quasi provident minima,
      molestiae doloremque deserunt ipsam unde veniam, dolorem dolore ipsa saepe
      atque optio. Veritatis illum iusto cumque recusandae voluptate culpa quo
      eum eos perspiciatis officia?
    </p>
            </div>
            <br>
            <br>
            <div>
<!--              data-aos="fade-up" data-aos-delay="3000" data-aos-duration="2000"-->
              <div style="height: 1000px;"></div> <!-- Делаем страницу длинной -->
              <div #animEl class="animate__delay-1s" style="background-color:#ffeb3b">
                <p>Dimkaaaaaaaa1</p>
              </div>

              <p #animEl class="animate__delay-2s">Olyaaa</p>
              <p #animEl class="animate__delay-3s">Nikaaa</p>
              </div>
            <br>
            <br>
      <div class="article-content">
        <div class="header-image-container">

        @if(article()?.image_url){
          <img
            [src]="article()?.image_url"
            [alt]="article()?.title"
            class="header-image"
          />
          }

          <div class="image-overlay"></div>
        </div>

        <div class="content-block">
          <h1 class="article-title">{{ article()?.title }}</h1>
          <div class="article-text">
            <p>{{ article()?.summary }}</p>
          </div>
          <button mat-button routerLink="/" class="back-button">
            ← Back to homepage
          </button>
        </div>
      </div>
      }

      @if(!article() && !loading()){
      <div class="not-found-container">
        <mat-card>
          <mat-card-content>
            <h2>Article Not Found</h2>
            <p>The article you are looking for does not exist.</p>
            <button mat-button color="primary" routerLink="/">
              Go to Homepage
            </button>
          </mat-card-content>
        </mat-card>
      </div>
      }
    </div>
    <br>
    <hr>
    <br>
    <p></p>
  `,
  styleUrl: './article-detail.component.scss',
})
export class ArticleDetailComponent implements AfterViewChecked, OnDestroy {
  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);


  article = signal<Article | null>(null);
  loading = signal<boolean>(false);

  constructor(private el: ElementRef) {

    effect(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.loadArticle(parseInt(id));
      }

    });
  }

  loadArticle(id: number): void {
    this.loading.set(true);
    this.articleService.getArticleById(id).subscribe({
      next: (article) => {
        this.article.set(article);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error loading article:', error);
        this.article.set(null);
        this.loading.set(false);
      },
    });
  }

  ngAfterViewChecked() {

  }


  //АНИМАЦИЯ нескольких элементов

  @ViewChildren('animEl', { read: ElementRef }) animEls!: QueryList<ElementRef<HTMLElement>>;

  private observer?: IntersectionObserver;
  private changesSub?: Subscription;
  private observed = new WeakSet<HTMLElement>();

  ngAfterViewInit() {
    this.setupObserver();
    this.observeAll();

    // слушаем изменения (элементы появились/удалились из DOM)
    this.changesSub = this.animEls.changes.subscribe(() => {
      this.observeAll();
    });
  }

  private setupObserver() {
    if (this.observer) return;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add('animate__animated', 'animate__fadeInDown'); // можно менять класс
          this.observer!.unobserve(el); // один раз
        }
      });
    }, { threshold: 0.15 });
  }

  private observeAll() {
    if (!this.observer) this.setupObserver();
    this.animEls.forEach(ref => {
      const el = ref.nativeElement as HTMLElement;
      if (!this.observed.has(el)) {
        this.observer!.observe(el);
        this.observed.add(el);
      }
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.changesSub?.unsubscribe();
  }


}
