# -*- coding: utf-8 -*-
"""Helper utilities and decorators."""
from flask import flash
from cryptography.hazmat.primitives.asymmetric import dsa
from cryptography.hazmat.backends import default_backend



def flash_errors(form, category="warning"):
    """Flash all errors for a form."""
    for field, errors in form.errors.items():
        for error in errors:
            flash(f"{getattr(form, field).label.text} - {error}", category)

    private_key = dsa.generate_private_key(
        key_size=512,
        backend=default_backend()
    )   
