#pragma strict



function OnCollisionEnter () {

    var audio: AudioSource = GetComponent.<AudioSource>();
    audio.Play();
    audio.Play(44100);

    }