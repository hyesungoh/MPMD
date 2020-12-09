from django import forms


class ActorForm(forms.Form):
    month = forms.CharField(max_length=2)
    day = forms.CharField(max_length=2)
