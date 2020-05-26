<template>
  <section id="team" class="pb-5">
    <div class="container">
      <h5 class="section-title h1">OUR TEAM</h5>
      <div class="container">
        <div class="row">
          <div
          class="col-xs-12 col-sm-6 col-md-3"
          v-for="teamMember in teamMembers"
          v-bind:key="teamMember.id"
        >
          <div class="image-flip">
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <img class="img-fluid" src="@/assets/poker-logo.png" alt="card image" />
                    </p>
                    <h4 class="card-title">{{ teamMember.name }}</h4>
                    <p class="card-text">{{teamMember.front_title}}</p>
                  </div>
                </div>
              </div>
              <div class="backside">
                <div class="card">
                  <div class="card-body text-center">
                    <h4 class="card-title">{{ teamMember.name }}</h4>
                    <p class="card-text">{{teamMember.detailed_title}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: "Jean",
          detailed_title: "Software Engineer",
          front_title: "Frontend Dev"
        },
        {
          id: 2,
          name: "Adrian",
          detailed_title: "Software Engineer",
          front_title: "Backend Dev"
        },
        {
          id: 3,
          name: "Krzysztof",
          detailed_title: "Software Engineer",
          front_title: "Backend Dev"
        },
        {
          id: 4,
          name: "Burak",
          detailed_title: "Embedded Systems Engineer",
          front_title: "Frontend Dev"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
#team {
  background: #eee !important;
  margin-top: 100px;
}

section {
  padding: 120px 0;
}

section .section-title {
  text-align: center;
  margin-bottom: 50px;
  text-transform: uppercase;
}

#team .card {
  border: none;
  background: #ffffff;
  border-radius: 0;
}

.image-flip:hover .backside,
.image-flip.hover .backside {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

.image-flip:hover .frontside,
.image-flip.hover .frontside {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.mainflip {
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -ms-transition: 1s;
  -moz-transition: 1s;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
  position: relative;
}

.frontside {
  position: relative;
  -webkit-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  z-index: 2;
  margin-bottom: 30px;
  -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}

.backside {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}

.frontside,
.backside {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 1s;
  -moz-transform-style: preserve-3d;
  -o-transition: 1s;
  -o-transform-style: preserve-3d;
  -ms-transition: 1s;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
}

.frontside .card,
.backside .card {
  min-height: 312px;
}

.backside .card a {
  font-size: 18px;
  color: #b11e22 !important;
}

.frontside .card .card-title,
.backside .card .card-title {
  color: #b11e22 !important;
}

.frontside .card .card-body img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
</style>
