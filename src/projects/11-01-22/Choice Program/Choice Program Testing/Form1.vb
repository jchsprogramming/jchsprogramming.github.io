'Muhammed Oruc
'Computer Science - Period 7
'1/14/2022
'Choice Program

Public Class Form1

    Public eat As Boolean = False
    Public peel As Boolean = False
    Public toycar As Integer = 0
    Public drone As Integer = 0
    Public bag As Integer = 0
    Public shoes As Integer = 0
    Public cat As Integer = 0
    Public banana As Integer = 0
    Public balance As Long = 0
    Public level As Integer = 1
    Public upgrade As Integer = 10
    Public add As Integer = 0

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click

        Timer2.Enabled = True

    End Sub

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

        Label1.Text = balance
        Label2.Text = level
        Label3.Text = upgrade
        Label4.Visible = False

    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click

        If (balance < upgrade) Then
            Timer1.Enabled = True
            Label4.Visible = True
        End If

        If (balance >= upgrade) Then

            add = add + 1
            balance = balance - upgrade
            level = level + add + 1

            Label1.Text = balance
            Label2.Text = level

            upgrade = (upgrade + add) * 2

            Label3.Text = upgrade

        End If

    End Sub

    Private Sub Timer1_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Timer1.Tick

        Label4.Visible = False

    End Sub

    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click

        Form2.Show()
        Me.Hide()

    End Sub

    Private Sub Button4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button4.Click

        Form3.Show()
        Me.Hide()
    End Sub

    Private Sub Button3_MouseEnter(sender As Object, e As EventArgs) Handles Button3.MouseEnter

        Button3.ForeColor = Color.DarkSeaGreen
        Button3.BackColor = Color.Honeydew

    End Sub

    Private Sub Button3_MouseLeave(sender As Object, e As EventArgs) Handles Button3.MouseLeave

        Button3.ForeColor = Color.Honeydew
        Button3.BackColor = Color.DarkSeaGreen

    End Sub

    Private Sub Button4_MouseEnter(sender As Object, e As EventArgs) Handles Button4.MouseEnter

        Button4.ForeColor = Color.DarkSeaGreen
        Button4.BackColor = Color.Honeydew

    End Sub

    Private Sub Button4_MouseLeave(sender As Object, e As EventArgs) Handles Button4.MouseLeave

        Button4.ForeColor = Color.Honeydew
        Button4.BackColor = Color.DarkSeaGreen

    End Sub

    Private Sub Button2_MouseEnter(sender As Object, e As EventArgs) Handles Button2.MouseEnter

        Button2.ForeColor = Color.DarkSeaGreen
        Button2.BackColor = Color.Honeydew

    End Sub

    Private Sub Button2_MouseLeave(sender As Object, e As EventArgs) Handles Button2.MouseLeave

        Button2.ForeColor = Color.Honeydew
        Button2.BackColor = Color.DarkSeaGreen

    End Sub

    Private Sub Timer2_Tick(sender As Object, e As EventArgs) Handles Timer2.Tick

        balance = balance + level
        Label1.Text = balance

        Timer2.Enabled = False

    End Sub
End Class
